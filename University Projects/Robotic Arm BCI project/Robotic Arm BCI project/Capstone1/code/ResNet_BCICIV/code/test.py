import keras
from keras_applications.resnext import ResNeXt50
from keras.callbacks import ModelCheckpoint
from keras.layers import Flatten, Dropout, Dense
import sys
sys.path.append('..')
import configparser
from miya.fileAction import joinPath
from miya.appLog import createLog
from miya.datasetImg import dataset
from BCICIV_Comm.BandList import one_hot_encode,createBandFolderList
from keras.models import Model
import keras.optimizers as optimizer
import os
from numpy import unique
from BCICIV_Comm.loadImgData import equalData,loadData
from keras.models import load_model
from miya.fileAction import joinPath
from miya.plt import plotHistory
import xlwt
import xlrd
from xlutils.copy import copy
import datetime as dt

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
    batch_size = int(cf.get('ML', 'batch_size'))
    imgWidth = int(cf.get('ML', 'img_width'))
    imgHeight = int(cf.get('ML', 'img_height'))
    for bgm in bgmList:
        trainImgPaths = []
        trainLabels_1d = []
        trainNum = 0
        model_path=os.path.join(cf.get('data', 'trainPath'), '%s.h5' % cf.get('ML', 'modelName'))
        resNet=load_model(model_path)

        excelPath = joinPath(cf.get('data', 'trainPath'), '%s_test.xls' % (cf.get('ML', 'modelName')))
        # testFolder=joinPath(yml['Meta']['basicFolder'],yml['Meta']['folderName'],'folder_%d'%folderIndex)
        if os.path.exists(excelPath):
            r_wb = xlrd.open_workbook(excelPath)
            w_wb = copy(r_wb)
        else:
            w_wb = xlwt.Workbook()
        sheetName = dt.datetime.now().strftime('%d%m%Y-%H%M%S')

        sheetName = sheetName.replace('_', '-')
        try:
            test_sheet = w_wb.get_sheet(sheetName)
        except:
            test_sheet = w_wb.add_sheet(sheetName)

        titleStyle = xlwt.easyxf('font: bold 1')
        test_sheet.write(1, 0, 'Subject', titleStyle)
        test_sheet.write(1, 1, 'Accuracy', titleStyle)
        test_sheet.write(1, 2, 'Loss', titleStyle)
        i = 1
        for sub in subjects:
            i = i + 1
            test_sheet.write(i, 0, str(sub))
        w_wb.save(excelPath)

        colIndex = 1
        j = 1
        for sub in subjects:
            print('--------------------- Fetching Data from suject %s ---------------------' % (sub))
            imgPaths, labels_1d = loadData(sub, cf, runLog,bgm,isTrain=False)
            labels_2d = one_hot_encode(labels_1d)
            sub_dataset=dataset(imgPaths,labels_2d,batch_size,imgWidth,imgHeight)
            sub_imgs=sub_dataset.get_all_img(toNumpy=True)
            loss, accu = resNet.evaluate(sub_imgs, labels_2d)
            j = j + 1
            test_sheet.write(j, colIndex, float(accu))
            test_sheet.write(j, colIndex + 1, float(loss))
            w_wb.save(excelPath)
            print("Subject %s 's accuracy is %f , loss is %f" % (sub, accu, loss))
        colIndex = colIndex + 2

