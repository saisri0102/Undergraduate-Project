import keras
from keras_applications.resnext import ResNeXt50
from keras.callbacks import ModelCheckpoint
from keras.layers import Flatten, Dropout, Dense
import sys
sys.path.append('..')
import configparser
from miya.fileAction import joinPath
from miya.appLog import createLog
from miya.datasetImg import read_train_sets
from BCICIV_Comm.BandList import one_hot_encode,createBandFolderList
from keras.models import Model
import keras.optimizers as optimizer
import os
from numpy import unique
from BCICIV_Comm.loadImgData import equalData,loadData
from keras.models import load_model
from miya.fileAction import joinPath
from miya.plt import plotHistory

if __name__ == '__main__':
    cf = configparser.ConfigParser()
    cf.read("BCIPara.ini")
    label = cf.get("data", 'label')
    trainFolderAppend = cf.get('data', 'trainFolderAppend')
    resultPath = joinPath(cf.get('data', 'trainPath'), 'trainResult' + trainFolderAppend)
    runLog = createLog(resultPath, 'trainRun', True)
    labelList = cf.get('data', 'labelList')
    doCut = False
    appendName = cf.get('data', 'appendName')
    bgmList = createBandFolderList(doCut, appendName)
    subjects = labelList.split(',')

    for bgm in bgmList:
        trainImgPaths = []
        trainLabels_1d = []
        trainNum = 0
        for sub in subjects:
            imgPaths, label_1d = loadData(sub, cf, runLog,bgm)
            trainNum = trainNum + len(label_1d)
            trainImgPaths.extend(imgPaths)
            trainLabels_1d.extend(label_1d)

        keys = unique(trainLabels_1d)
        trainImgPaths, trainLabels_1d = equalData(keys, trainImgPaths, trainLabels_1d)
        imgWidth = int(cf.get('ML', 'img_width'))
        imgHeight = int(cf.get('ML', 'img_height'))
        validation_size = float(cf.get('ML', 'validation_size'))
        batch_size = int(cf.get('ML', 'batch_size'))
        trainLabels_2d = one_hot_encode(trainLabels_1d)
        trainDS = read_train_sets(trainImgPaths, trainLabels_2d, batch_size, batch_size, validation_size, imgWidth,
                                  imgHeight)

        lr = float(cf.get('ML', 'learning_rate'))
        ''' model = ResNeXt50(weights='imagenet',backend=keras.backend,layers=keras.layers,models=keras.models,
                          utils=keras.utils,classes=5,input_shape=(imgWidth,imgHeight,3))'''
        # 捨棄 ResNet50 頂層的 fully connected layers
        net = ResNeXt50(weights='imagenet', backend=keras.backend, layers=keras.layers, models=keras.models,
                        utils=keras.utils, input_shape=(imgWidth, imgHeight, 3))
        x = net.output
        # x = Flatten()(x)

        # 增加 DropOut layer
        x = Dropout(0.5)(x)

        # 增加 Dense layer，以 softmax 產生個類別的機率值
        output_layer = Dense(len(keys), activation='softmax', name='softmax')(x)

        FREEZE_LAYERS = 2
        # 設定凍結與要進行訓練的網路層
        net_final = Model(inputs=net.input, outputs=output_layer)
        for layer in net_final.layers[:FREEZE_LAYERS]:
            layer.trainable = False
        for layer in net_final.layers[FREEZE_LAYERS:]:
            layer.trainable = True

        print(net_final.summary())

        # 使用 Adam optimizer，以較低的 learning rate 進行 fine-tuning
        net_final.compile(optimizer=optimizer.Adam(lr=1e-5),
                          loss='categorical_crossentropy', metrics=['accuracy'])

        trainEpoch = int(cf.get('ML', 'trainEpoch'))
        steps_per_epoch = int(trainDS.Train._num_examples/trainEpoch)#int(cf.get('ML', 'steps_per_epoch'))
        save_fname = os.path.join(cf.get('data', 'trainPath'), '%s.h5' % cf.get('ML', 'modelName'))
        if os.path.exists(save_fname):
            net_final=load_model(save_fname)
        callbacks = [
            ModelCheckpoint(filepath=save_fname, monitor='loss', save_best_only=True)
        ]
        history=net_final.fit_generator(trainDS.Train.generate_batch(trainEpoch * steps_per_epoch),
                                steps_per_epoch=steps_per_epoch,
                                epochs=trainEpoch,
                                callbacks=callbacks,
                                workers=1,
                                validation_data=trainDS.Valid.generate_batch(trainEpoch * int(steps_per_epoch / 5)),
                                validation_steps=int(steps_per_epoch / 5))
        historyImgPath = os.path.join(cf.get('data', 'trainPath'), '%s.png' % cf.get('ML', 'modelName'))
        plotHistory(history,historyImgPath)
        print("END!!!!!!!!!!!!!!!!!")
