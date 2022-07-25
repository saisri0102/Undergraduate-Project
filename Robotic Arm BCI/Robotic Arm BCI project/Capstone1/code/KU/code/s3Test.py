import sys
sys.path.append('..')
import yaml
from ETRNet import ETRNet
from createImg import getImgPath
from bandList import getEpochPara,createBandGroupMode
import multiprocessing
from createImg import loadImgData
from miya.datasetImg import dataset
from loadData import eventClass,one_hot_encode
from ComFun import joinPath
import os
import datetime
from miya.fileAction import getModelDic
from s2Train import getModelFolder
from ETRNet import test_oneModel
from miya.MLTest import test

def loadData(yml, sub, chanDic, eventDic, getData=None):
    print('Going to test Sub.%d for mode of %s ' % (sub,bgm.Group))
    imgFolder = joinPath(yml['Meta']['basicFolder'], 'train_img',str(sub), yml['Meta']['folderName'], bgm.Group) #bgm.Group
    filePaths, labels = loadImgData(imgFolder)
    if len(filePaths)>0:
        batch_size = yml['ML']['batch_size']
        validation_size = yml['ML']['validation_size']
        imgWidth = yml['ML']['img_width']
        imgHeight = yml['ML']['img_height']
        test_dataset = dataset(filePaths, labels, batch_size, imgWidth, imgHeight)
        data_sub=test_dataset.get_all_img()
        labels = one_hot_encode(labels)
        return data_sub, labels
    return None,None

if __name__ == '__main__':
    print(sys.argv[1])
    yml = yaml.load(open(sys.argv[1]),Loader=yaml.FullLoader)
    doCut=yml['Img']['doCut']
    bgms = createBandGroupMode(doCut=doCut)
    subjects=range(1,yml['Meta']['subsample']+1)
    excelFileName=yml['Meta']['folderName']
    for bgm in bgms:
        curModelPath=getModelFolder(yml,bgm.Group)
        #modelDic,modelPath=getModelDic(curModelPath)
        imgFolder = getImgPath(yml, 'train_img', bgm.Group)#Just test
        #filePaths, labels = loadImgData(imgFolder)

        #if modelPath is not None:
        test(test_oneModel, yml, subjects, loadData, getData=None, chanDic=None, eventDic=getEpochPara(), modelDir=curModelPath, excelFileName=excelFileName)
                #test_oneModel,yml,subjects,loadData,getData,chanDic,eventDic,modelDir,excelFileName