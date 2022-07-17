import sys
sys.path.append('..')
import yaml
from ETRNet import ETRNet
from createImg import getImgPath
from bandList import getEpochPara,createBandGroupMode
import multiprocessing
from createImg import loadImgData
from miya.datasetImg import read_train_sets
from loadData import eventClass,one_hot_encode
from ComFun import joinPath
import os
import datetime

def getModelFolder(yml,group):
    imgFolder=joinPath(yml['Meta']['basicFolder'],yml['Meta']['folderName'])
    if not os.path.exists(imgFolder):
        os.mkdir(imgFolder)
    imgFolder=joinPath(yml['Meta']['basicFolder'],yml['Meta']['folderName'],group)
    if not os.path.exists(imgFolder):
        os.mkdir(imgFolder)
    return imgFolder

def trainETR(yml,bgm,modelPath=None):
    print('Going to train for mode of %s'%bgm.Group)
    imgFolder=getImgPath(yml,'train_img',bgm.Group)
    filePaths,labels=loadImgData(imgFolder)
    batch_size=yml['ML']['batch_size']
    validation_size=yml['ML']['validation_size']
    imgWidth=yml['ML']['img_width']
    imgHeight=yml['ML']['img_height']
    dataset=read_train_sets(filePaths, labels, batch_size, batch_size, validation_size, imgWidth, imgHeight)
    trainEpoch=yml['ML']['train_epoch']
    if dataset.Train._num_examples>5*trainEpoch:
        ert_net=ETRNet()
        if modelPath is None:
            ert_net.create_net(yml,len(eventClass))
        else:
            ert_net.load_model(modelPath)
        #steps_per_epoch=yml['ML']['steps_per_epoch']
        steps_per_epoch=int(dataset.Train._num_examples/trainEpoch)
        ert_net.train_generator(data_gen=dataset.Train.generate_batch(iterNum=trainEpoch * steps_per_epoch,hotCodeFun=one_hot_encode),
                                epochs=trainEpoch, batch_size=batch_size, steps_per_epoch=steps_per_epoch,
                                save_dir=getModelFolder(yml,bgm.Group), folderIndex=0,
                            valid_data_gen=dataset.Valid.generate_batch(iterNum=trainEpoch * int(steps_per_epoch / 5),hotCodeFun=one_hot_encode))
        print('End train for mode of %s'%bgm.Group)

if __name__ == '__main__':
    print(sys.argv[1])
    yml = yaml.load(open(sys.argv[1]),Loader=yaml.FullLoader)
    doCut=yml['Img']['doCut']
    bgms = createBandGroupMode(doCut=doCut)
    for bgm in bgms:
        curModelPath=getModelFolder(yml,bgm.Group)
        h5TimeList = {}
        for root, _, files in os.walk(os.path.abspath(curModelPath)):
            for fl in files:
                if (fl.endswith('.h5')):
                    flNameS = fl.split('-')
                    h5TimeList.setdefault(datetime.datetime.strptime(flNameS[0] + flNameS[1], '%d%m%Y%H%M%S'),
                                          joinPath(root, fl))
        modelPath=None
        if len(h5TimeList) > 0:
            if 'reTrain' not in yml['ML'] or not yml['ML']['reTrain']:
                doTrain = False
            elif yml['ML']['reTrain']:
                keys = sorted(h5TimeList.keys(), reverse=True)
                modelPath = h5TimeList[keys[0]]
        p = multiprocessing.Process(target=trainETR, args=[yml,bgm,modelPath])
        p.start()
        p.join()
