import sys
sys.path.append('..')
from ComFun import joinPath
import os
import mne
import NeuroDataLog
from SaveFile import saveFig2,saveRawDataToFile
import numpy as np
import shutil
from loadData import eventClass

def getImgPath(yml,imgParFolder,group):
    '''
    imgParFolder='train_img' Or 'test_img'
    group=[BandBegin]-[BandEnd]-[Mode], where Mode in ['_Mean','_Rat','_Log','_Per','_Zsc','_Zlo'],
            such as '9-20_Mean'
    '''
    return joinPath(yml['Meta']['basicFolder'],imgParFolder, yml['Meta']['folderName'], group)
    #return '%s/%s/%s/%s' % (yml['Meta']['basicFolder'], imgParFolder, yml['Meta']['folderName'], group)

def createImg(epochParas,raw, events,bgm,yml,isTest=False):
    uEvents=np.unique(events[:,2])
    if not os.path.exists(yml['Meta']['basicFolder']):
        os.mkdir(yml['Meta']['basicFolder'])
    imgParFolder='train_img'
    if isTest:
        imgParFolder='test_img'
    imgRefFolder = '%s/%s' % (yml['Meta']['basicFolder'],imgParFolder)
    if not os.path.exists(imgRefFolder):
        os.mkdir(imgRefFolder)
    imgRefFolder='%s/%s/%s'%(yml['Meta']['basicFolder'],imgParFolder,yml['Meta']['folderName'])
    if not os.path.exists(imgRefFolder):
        os.mkdir(imgRefFolder)
    imgPath=getImgPath(yml,imgParFolder,bgm.Group)
    if not os.path.exists(imgPath):
        os.mkdir(imgPath)
    epochLogFile='%s/%s/%s/epochLog'%(yml['Meta']['basicFolder'],imgParFolder,yml['Meta']['folderName'])
    if not os.path.exists(epochLogFile):
        os.mkdir(epochLogFile)
    getExist=True
    if 'getExistImg' in yml['Img']:
        getExist=yml['Img']['getExistImg']
    mapSize=yml['Img']['map_size']
    doCut=yml['Img']['doCut']
    if (doCut):
        shape_L = yml['Img']['shape_L']
        shape_R = yml['Img']['shape_R']
        shape_U = yml['Img']['shape_U']
        shape_D = yml['Img']['shape_D']
        cut_shape = (shape_L, shape_U, shape_R, shape_D)
    else:
        cut_shape = None
    freqs = np.arange(6., 36., 1.)  # np.logspace(*np.log10([6, 35]), num=20)#
    n_cycles = freqs / 2.  # different number of cycle per frequency
    for event_id in epochParas.keys():
        indexArr = np.where(uEvents == event_id)
        if (len(indexArr[0]) == 0):
            continue
        epochP = epochParas[event_id]
        # If haven run,skip.
        epochFilePath = joinPath(imgPath, epochP.ActionName, ('B%s_G%s_E%d_W%.1f.pkl')%(bgm.Band.BandName,bgm.Group ,event_id,epochP.WSize))
        if getExist:
            if (os.path.exists(epochFilePath)):
                continue
        # 2
        # eventIndexs=np.where(events[:,2]==event_id)[0]
        epochLog = []
        epochs = mne.Epochs(raw, events, event_id, epochP.TMin, epochP.TMax, proj=True, baseline=epochP.Baseline,
                            preload=True, reject=None, decim=4)
        #epochs.resample(60., npad='auto')  # set resample to reduce computation time

        for i in range(len(epochs)):
            cur_time = epochP.CurTime
            curEproch = None
            if cur_time + epochP.WSize <= epochP.StopTime:  # confirm curEproch have Log
                curEproch = NeuroDataLog.EpochsLog(epochs[i])
                power, _ = mne.time_frequency.tfr_morlet(epochs[i], freqs=freqs, n_cycles=n_cycles, use_fft=True, return_itc=True, decim=3, n_jobs=1)

                while cur_time + epochP.WSize <= epochP.StopTime:
                    filePath, cutFileName, channelData, eegData, _ = saveFig2(curPower=power, eve_id=event_id,
                                                                                      actionName=epochP.ActionName,
                                                                                      index=epochs.selection[i],
                                                                                      time_min=cur_time,
                                                                                      time_max=cur_time + epochP.WSize,
                                                                                      freq_min=bgm.Band.BandBegin,
                                                                                      freq_max=bgm.Band.BandEnd,
                                                                                      imgPath=imgPath,
                                                                                      waveName=bgm.Band.BandName,
                                                                                      show_sensors=bgm.Sensor,
                                                                                      map_size=mapSize,
                                                                                      cut_box=cut_shape, mode=bgm.Mode,
                                                                                      vmin=bgm.VMin, vmax=bgm.VMax,
                                                                                      baseline=epochP.Baseline)

                    if (len(curEproch.get_fileLog()) < 1000):
                        curEproch.addFileLog(filePath, cutFileName, channelData, eegData)
                    cur_time += epochP.TStep
            if curEproch != None and len(epochLog) < 100:
                epochLog.append(curEproch)

        if (len(epochLog) > 0):
            saveRawDataToFile(epochFilePath, epochLog)

'''
def CreateImageFromEpoch(raw, events, eventId, imgEventId, epochPara, freqs, n_cycles, bgm, imgPath, mapSize, cut_shape,
                         epochFileName, runLog, uEvents, getExist, copyTest2Train=False, trainFolder='',
                         trainActionName=''):
    try:
        indexArr = np.where(uEvents == eventId)
        if (len(indexArr[0]) == 0):
            return
        # If haven run,skip.
        epochFilePath = joinPath(imgPath, 'images', epochPara.ActionName, epochFileName + '_' + str(eventId) + '.pkl')
        if getExist:
            if (os.path.exists(epochFilePath)):
                return
        epochLog = []
        eventIndexs = np.where(events[:, 2] == eventId)[0]
        epochIndex = 0
        for eIndex in eventIndexs:
            if eIndex >= len(events) - 1:
                break

            tempTime = (events[eIndex + 1][0] - events[eIndex][0]) / 250.
            tempMin = 0.
            pictureIndex = (eventId * 10000) + eIndex
            if (copyTest2Train):
                pictureIndex += 100000000
            while (tempMin + 2. < tempTime):
                epochs = mne.Epochs(raw, events, eventId, tempMin, tempMin + 2., proj=True, baseline=epochPara.Baseline,
                                    preload=True, reject=None, decim=4)
                epochs.resample(60., npad='auto')
                if epochIndex >= len(epochs):
                    break
                cur_time = epochs[epochIndex].tmin
                curEproch = None
                if cur_time + epochPara.WSize <= epochs[epochIndex].tmax:
                    curEproch = NeuroDataLog.EpochsLog(epochs[epochIndex])
                    power, _ = mne.time_frequency.tfr_morlet(epochs[epochIndex], freqs=freqs, n_cycles=n_cycles, use_fft=True,
                                          return_itc=True, decim=3, n_jobs=1)

                    while cur_time + epochPara.WSize <= epochs[epochIndex].tmax:
                        # filePath,cutFileName,channelData,eegData,_=SaveFile.saveFig(curPower=power, eve_id=imgEventId, actionName=epochPara.ActionName, index=(eventId*10000)+eIndex*1000+int(tempMin), time_min=cur_time, time_max=cur_time+epochPara.TStep,
                        #                                                 freq_min=bgm.Band.BandBegin, freq_max=bgm.Band.BandEnd, imgPath=imgPath, waveName=bgm.Band.BandName,
                        #                                                 show_sensors=bgm.Sensor, map_size=mapSize, cut_box=cut_shape, mode=bgm.Mode, vmin=bgm.VMin, vmax=bgm.VMax,baseline=epochPara.Baseline)
                        filePath, cutFileName, channelData, eegData, imgName = saveFig2(curPower=power,
                                                                                                eve_id=imgEventId,
                                                                                                actionName=epochPara.ActionName,
                                                                                                index=pictureIndex,
                                                                                                time_min=cur_time,
                                                                                                time_max=cur_time + epochPara.WSize,
                                                                                                freq_min=bgm.Band.BandBegin,
                                                                                                freq_max=bgm.Band.BandEnd,
                                                                                                imgPath=imgPath,
                                                                                                waveName=bgm.Band.BandName,
                                                                                                show_sensors=bgm.Sensor,
                                                                                                map_size=mapSize,
                                                                                                cut_box=cut_shape,
                                                                                                mode=bgm.Mode,
                                                                                                vmin=bgm.VMin,
                                                                                                vmax=bgm.VMax,
                                                                                                baseline=epochPara.Baseline,
                                                                                                otherAppend=str(
                                                                                                    tempMin))
                        if (len(curEproch.get_fileLog()) < 1000):
                            curEproch.addFileLog(filePath, cutFileName, channelData, eegData)
                        cur_time += epochPara.TStep
                        if (copyTest2Train):
                            if (cut_shape != None):
                                CopyToTrain(cutFileName, imgName, trainFolder, bgm.Group + '_cut', trainActionName)
                            else:
                                CopyToTrain(filePath, imgName, trainFolder, bgm.Group, trainActionName)
                if curEproch != None and len(epochLog) < 100:
                    epochLog.append(curEproch)
                tempMin += 2.
            epochIndex += 1
        if (len(epochLog) > 0):
            saveRawDataToFile(epochFilePath, epochLog)
    except Exception as e:
        runLog.info(e)
'''

def CopyToTrain(src,fileName,trainPath,bandFolder,actName):
    dst=joinPath(trainPath,bandFolder,'images',actName)
    if(not os.path.exists(dst)):
        os.makedirs(dst)
    dst=os.path.join(dst,fileName)
    shutil.copy(src, dst)

def loadImgData(imgFolder):
    labels = []
    filePaths = []
    if os.path.exists(imgFolder):
        for dirpath, _, filenames in os.walk(os.path.abspath(imgFolder)):
            if len(filenames) > 0:
                jpg_files = [joinPath(dirpath, f) for f in filenames if f.endswith('.jpg')]
                filePaths.extend(jpg_files)
                labels.extend([eventClass[dirpath.split('/')[-1]] for x in range(len(jpg_files))])
                print('There is %d images in %s ' % (len(jpg_files), dirpath))
    return filePaths,labels
