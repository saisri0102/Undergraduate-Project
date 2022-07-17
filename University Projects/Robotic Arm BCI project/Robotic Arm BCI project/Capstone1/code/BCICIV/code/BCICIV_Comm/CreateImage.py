import sys
sys.path.append('..')
import plumLog
import os
import mne
import numpy as np
import SaveFile
from CommonFum import joinPath
import shutil
import NeuroDataLog
from mne.time_frequency import tfr_morlet

def GetEEGData(imageFolder,filePath,rawPath,eventPath,cf=None,initEventPath=None): 
    runLog = plumLog.createLog(imageFolder,'createRun')
    try:        
        if not os.path.exists(eventPath):
            # Setup for reading the raw data            
            try:
                #raw = mne.io.read_raw_edf(filePath)
                raw = mne.io.read_raw_edf(filePath,eog=None,misc=None, preload=True, stim_channel=None)  
                raw.rename_channels({'EEG-Fz':'Fz', 'EEG-0':'FC3', 'EEG-1':'FC1', 'EEG-2':'FCz', 'EEG-3':'FC2', 'EEG-4':'FC4', 'EEG-5':'C5', 'EEG-C3':'C3', 'EEG-6':'C1', 'EEG-Cz':'Cz', 'EEG-7':'C2', 'EEG-C4':'C4', 'EEG-8':'C6', 'EEG-9':'CP3', 'EEG-10':'CP1', 'EEG-11':'CPz', 'EEG-12':'CP2', 'EEG-13':'CP4', 'EEG-14':'P1', 'EEG-Pz':'Pz', 'EEG-15':'P2', 'EEG-16':'POz', 'EOG-left':'M1', 'EOG-central':'FPz', 'EOG-right':'M2'})
                
                montage = mne.channels.read_montage('standard_1020')
                raw.set_montage(montage)                          
                
            except Exception as inE:
                runLog.info(inE)  
            #https://www.martinos.org/mne/stable/generated/mne.io.find_edf_events.html?highlight=read%20gdf
            events = mne.io.find_edf_events(raw)
            
            t=[events[1],events[3],events[2]]
            del1023=True
            if cf.has_option('S1', 'del1023'):
                del1023=cf.get('S1', 'del1023')=='1'
            if del1023:
                changeIndex=list(np.where(t[2]==1023))
                changeIndex=[i-2 for i in changeIndex]  
            events=np.transpose(t)
            if(initEventPath!=None):
                SaveFile.saveRawDataToFile(initEventPath,events)
            if del1023:
                for i in changeIndex:
                    events[i,2]=1024                            
            SaveFile.saveRawDataToFile(rawPath,raw)
            SaveFile.saveRawDataToFile(eventPath,events)
        else:
            raw=SaveFile.getRawDataFromFile(rawPath)
            events=SaveFile.getRawDataFromFile(eventPath)
        
        return raw,events 
    except Exception as e:
        runLog.info(e)  

def CreateTrainImgProcess(cf,trainEpochParas,bandNum,bandGroupModes):
    filePath = cf.get("data", "trainPath") 
    rawPath=cf.get("sysData", "rawTrain")
    eventPath=cf.get("sysData", "eventTrain")
    initEventPath=cf.get("sysData",'initEventTrain') 
    bandIndex=int(cf.get('S1', 'trainFreBandIndex'))
    imageFolder=cf.get("S1", "trainFolder")
    trainRaw,trainEvents=GetEEGData(imageFolder,filePath,rawPath,eventPath,cf,initEventPath)
    
    selTrainGroupModes=[]
    for i in np.arange(bandIndex*bandNum,(bandIndex+1)*bandNum,1):
        bgm=bandGroupModes[i]
        selTrainGroupModes.append(bgm) 
        
    epochTrain=cf.get("sysData", "epochTrain")
    CreateTrainImage(cf,trainRaw,trainEvents,epochTrain,trainEpochParas,selTrainGroupModes)
    print('Finish creating Train Images!')
    
def CreateTestImgProcess(cf,testEpochParas,trainEpochParas,bandNum,bandGroupModes):
    testPath = cf.get("data", "testPath")     
    rawTest=cf.get("sysData", "rawTest")
    eventTest=cf.get("sysData", "eventTest")  
    testFolder=cf.get("S1", "testFolder")
    testRaw,testEvents=GetEEGData(testFolder,testPath,rawTest,eventTest,cf) 
       
    bandIndex=int(cf.get('S1', 'testFreBandIndex'))
    selTestGroupModes=[]
    for i in np.arange(bandIndex*bandNum,(bandIndex+1)*bandNum,1):    
        bgm=bandGroupModes[i]
        selTestGroupModes.append(bgm)     
         
    epochTest=cf.get("sysData", "epochTest")
    CreateTestImg(cf,testRaw,testEvents,epochTest,testEpochParas,selTestGroupModes,trainEpochParas)
    print('Finish creating Test Images!')
    
def CreateImageFromEpoch(raw,events,eventId,imgEventId,epochPara,freqs,n_cycles,bgm,imgPath,mapSize,cut_shape,epochFileName,runLog,uEvents,getExist,copyTest2Train=False,trainFolder='',trainActionName=''):
    try:
        indexArr=np.where(uEvents==eventId)
        if(len(indexArr[0])==0):
            return
        #If haven run,skip.
        epochFilePath=joinPath(imgPath,'images',epochPara.ActionName,epochFileName+'_'+str(eventId)+'.pkl')
        if getExist:            
            if(os.path.exists(epochFilePath)):
                return
        epochLog=[]
        eventIndexs=np.where(events[:,2]==eventId)[0]
        epochIndex=0
        for eIndex in eventIndexs:
            if eIndex>=len(events)-1:
                break
            
            tempTime=(events[eIndex+1][0]-events[eIndex][0])/250.
            tempMin=0.
            pictureIndex=(eventId*10000)+eIndex
            if(copyTest2Train):
                pictureIndex+=100000000
            while(tempMin+2.<tempTime):        
                epochs=mne.Epochs(raw, events, eventId, tempMin,tempMin+2.,proj=True, baseline=epochPara.Baseline,preload=True, reject=None, decim=4)
                epochs.resample(60., npad='auto')  
                if epochIndex>=len(epochs):
                    break
                cur_time=epochs[epochIndex].tmin
                curEproch=None
                if cur_time+epochPara.TStep<=epochs[epochIndex].tmax:          
                    curEproch= NeuroDataLog.EpochsLog(epochs[epochIndex])
                    power,_ = tfr_morlet(epochs[epochIndex], freqs=freqs,n_cycles=n_cycles, use_fft=True,return_itc=True, decim=3, n_jobs=1)
                      
                    while cur_time+epochPara.TStep<=epochs[epochIndex].tmax:    
                        #filePath,cutFileName,channelData,eegData,_=SaveFile.saveFig(curPower=power, eve_id=imgEventId, actionName=epochPara.ActionName, index=(eventId*10000)+eIndex*1000+int(tempMin), time_min=cur_time, time_max=cur_time+epochPara.TStep, 
                        #                                                 freq_min=bgm.Band.BandBegin, freq_max=bgm.Band.BandEnd, imgPath=imgPath, waveName=bgm.Band.BandName, 
                        #                                                 show_sensors=bgm.Sensor, map_size=mapSize, cut_box=cut_shape, mode=bgm.Mode, vmin=bgm.VMin, vmax=bgm.VMax,baseline=epochPara.Baseline)
                        filePath,cutFileName,channelData,eegData,imgName=SaveFile.saveFig(curPower=power, eve_id=imgEventId, actionName=epochPara.ActionName, index=pictureIndex, time_min=cur_time, time_max=cur_time+epochPara.TStep, 
                                                                         freq_min=bgm.Band.BandBegin, freq_max=bgm.Band.BandEnd, imgPath=imgPath, waveName=bgm.Band.BandName, 
                                                                         show_sensors=bgm.Sensor, map_size=mapSize, cut_box=cut_shape, mode=bgm.Mode, vmin=bgm.VMin, vmax=bgm.VMax,baseline=epochPara.Baseline,otherAppend=str(tempMin))
                        if(len(curEproch.get_fileLog())<1000):              
                            curEproch.addFileLog(filePath,cutFileName,channelData,eegData)                                             
                        cur_time+=epochPara.TStep
                        if(copyTest2Train):
                            if(cut_shape!=None):                                                          
                                CopyToTrain(cutFileName,imgName,trainFolder,bgm.Group+'_cut',trainActionName)
                            else:
                                CopyToTrain(filePath,imgName,trainFolder,bgm.Group,trainActionName)
                if curEproch!=None and len(epochLog)<100:                
                    epochLog.append(curEproch)
                tempMin+=2.                   
            epochIndex+=1 
        if(len(epochLog)>0):  
            SaveFile.saveRawDataToFile(epochFilePath,epochLog) 
    except Exception as e:
        runLog.info(e) 
      
def CreateImageByTimeRange(raw,events,eventId,imgEventId,epochPara,freqs,n_cycles,bgm,imgPath,mapSize,cut_shape,epochFileName,runLog,uEvents,getExist,copyTest2Train=False,trainFolder='',trainActionName=''):
    try:
        indexArr=np.where(uEvents==eventId)
        if(len(indexArr[0])==0):
            return
        #If haven run,skip.
        epochFilePath=joinPath(imgPath,'images',epochPara.ActionName,epochFileName+'_'+str(eventId)+'.pkl')
        if getExist:            
            if(os.path.exists(epochFilePath)):
                return
        epochLog=[]
        epochs=mne.Epochs(raw, events, eventId, 0.,epochPara.StopTime,proj=True, baseline=epochPara.Baseline,preload=True, reject=None, decim=4)
        epochs.resample(60., npad='auto')   
        for i in range(len(epochs)):
            cur_time=epochs[i].tmin
            curEproch=None
            if cur_time+epochPara.TStep<=epochs[i].tmax:          
                curEproch= NeuroDataLog.EpochsLog(epochs[i])
                power,_ = tfr_morlet(epochs[i], freqs=freqs,n_cycles=n_cycles, use_fft=True,return_itc=True, decim=3, n_jobs=1)
                pictureIndex=epochs.selection[i]
                if(copyTest2Train):
                    pictureIndex+=10000  
                while cur_time+epochPara.TStep<=epochs[i].tmax:    
                    filePath,cutFileName,channelData,eegData,imgName=SaveFile.saveFig(curPower=power, eve_id=imgEventId, actionName=epochPara.ActionName, index=pictureIndex, time_min=cur_time, time_max=cur_time+epochPara.TStep, 
                                                                     freq_min=bgm.Band.BandBegin, freq_max=bgm.Band.BandEnd, imgPath=imgPath, waveName=bgm.Band.BandName, 
                                                                     show_sensors=bgm.Sensor, map_size=mapSize, cut_box=cut_shape, mode=bgm.Mode, vmin=bgm.VMin, vmax=bgm.VMax,baseline=epochPara.Baseline)
                    if(len(curEproch.get_fileLog())<1000):              
                        curEproch.addFileLog(filePath,cutFileName,channelData,eegData)                                             
                    cur_time+=epochPara.TStep
                    if(copyTest2Train):
                        if(cut_shape!=None):                                                          
                            CopyToTrain(cutFileName,imgName,trainFolder,bgm.Group+'_cut',trainActionName)
                        else:
                            CopyToTrain(filePath,imgName,trainFolder,bgm.Group,trainActionName)
            if curEproch!=None and len(epochLog)<100:                
                epochLog.append(curEproch)  
        if(len(epochLog)>0):  
            SaveFile.saveRawDataToFile(epochFilePath,epochLog) 
    except Exception as e:
        runLog.info(e) 
      
    
def CreateTrainImage(cf,raw,events,epochLogFile,epochParas,bandGroupModes): 
    #Be Careful!!! Fit for the EpochParas have 100 Key.
    imageFolder=cf.get("S1", "trainFolder")
    getExist=int(cf.get('S1','getExistTrainImg'))==1
    
    global runLog
    runLog = plumLog.createLog(imageFolder,'createRun')    
    mapSize=int(cf.get('S1','map_size'))
    doCut=int(cf.get('S1','doCut'))==1
    if(doCut):
        shape_L=float(cf.get('S1','shape_L'))
        shape_R=float(cf.get('S1','shape_R'))
        shape_U=float(cf.get('S1','shape_U'))
        shape_D=float(cf.get('S1','shape_D'))
        cut_shape=(shape_L,shape_U,shape_R,shape_D)
    else:
        cut_shape=None
    delEventIds=[276,277,1023,1072]
    events=delEvent(delEventIds,events)    
    uEvents=np.unique(events[:,2])
    try:        
        # Construct Epochs       
        freqs = np.arange(6., 36., 1.)#np.logspace(*np.log10([6, 35]), num=20)#      
        n_cycles = freqs / 2.  # different number of cycle per frequency
                
        for bgm in bandGroupModes:             
            bgmLog='freq_min={0},freq_max={1},mode={2},showSensor={3}'.format(bgm.Band.BandBegin,bgm.Band.BandEnd,bgm.Mode,bgm.Sensor)
            runLog.info(bgmLog)
            imgPath=joinPath(imageFolder,bgm.Group) 
            
            epochP100=epochParas[100]
                        
            CreateImageFromEpoch(raw,events,32766,100,epochP100,freqs,n_cycles,bgm,imgPath,mapSize,cut_shape,epochLogFile,runLog,uEvents,getExist)
            CreateImageByTimeRange(raw,events,768,100,epochP100,freqs,n_cycles,bgm,imgPath,mapSize,cut_shape,epochLogFile,runLog,uEvents,getExist)
            #1
            #eventL=len(events)
                       
            #for event_id in event_ids:
            
            for event_id in epochParas.keys():  
                indexArr=np.where(uEvents==event_id)
                if(len(indexArr[0])==0):
                    continue
                epochP=epochParas[event_id]
                #If haven run,skip.
                epochFilePath=joinPath(imgPath,'images',epochP.ActionName,epochLogFile+'_'+str(event_id)+'.pkl')
                if getExist:            
                    if(os.path.exists(epochFilePath)):
                        continue
                #2
                #eventIndexs=np.where(events[:,2]==event_id)[0]                               
                epochLog=[]
                epochs = mne.Epochs(raw, events, event_id, epochP.TMin, epochP.TMax, proj=True, baseline=epochP.Baseline,preload=True, reject=None, decim=4)
                epochs.resample(60., npad='auto')  #set resample to reduce computation time
                
                for i in range(len(epochs)):
                    ''' #3
                    #confirm next event isn't stopping event
                    nextIndex=eventIndexs[i]+1
                    if(nextIndex>eventL-1):
                        nextEveId=events[nextIndex,2]
                        if np.any(stopEventIds,nextEveId):
                            continue
                    '''
                    cur_time=epochP.CurTime
                    curEproch=None
                    if cur_time+epochP.TStep<=epochP.StopTime:#confirm curEproch have Log
                        curEproch= NeuroDataLog.EpochsLog(epochs[i])
                        power,_ = tfr_morlet(epochs[i], freqs=freqs, n_cycles=n_cycles, use_fft=True,return_itc=True, decim=3, n_jobs=1)
                        
                        while cur_time+epochP.TStep<=epochP.StopTime:    
                            filePath,cutFileName,channelData,eegData,_=SaveFile.saveFig(curPower=power, eve_id=event_id, actionName=epochP.ActionName, index=epochs.selection[i], time_min=cur_time, time_max=cur_time+epochP.TStep, 
                                                                             freq_min=bgm.Band.BandBegin, freq_max=bgm.Band.BandEnd, imgPath=imgPath, waveName=bgm.Band.BandName, 
                                                                             show_sensors=bgm.Sensor, map_size=mapSize, cut_box=cut_shape, mode=bgm.Mode, vmin=bgm.VMin, vmax=bgm.VMax,baseline=epochP.Baseline)
                                          
                            if(len(curEproch.get_fileLog())<1000):
                                curEproch.addFileLog(filePath,cutFileName,channelData,eegData)                                             
                            cur_time+=epochP.TStep 
                    if curEproch!=None and len(epochLog)<100:
                        epochLog.append(curEproch)                    
                    
                if(len(epochLog)>0):  
                    SaveFile.saveRawDataToFile(epochFilePath,epochLog)
    except Exception as e:
        runLog.info(e)  

def delEvent(eIds,events):
    for ei in eIds:
        eventIndexs=np.where(events[:,2]==ei)[0]
        events=np.delete(events,eventIndexs,0)
    return events

def IsDifferentTwoEvent(trainEvents,testEvents):
    different=False
    trainLen=len(trainEvents)
    testLen=len(testEvents)        
    if(trainLen!=testLen):
        different=True   
        print('Train Event Length:{0}  Test Event Length:{1}'.format(len(trainEvents),len(testEvents)))
        
        if trainLen>testLen:
            for i in range(testLen):
                if(trainEvents[i][2]!=testEvents[i][2] and testEvents[i][2]!=783):
                    print('{0} Different:{1}-{2}'.format(i,trainEvents[i][2],testEvents[i][2]))
            print("Train More Event:")
            for i in range(testLen,trainLen):
                print('{0}:{1}'.format(i,trainEvents[i][2])) 
        else:
            for i in range(trainLen):
                if(trainEvents[i][2]!=testEvents[i][2] and testEvents[i][2]!=783):
                    print('{0} Different:{1}-{2}'.format(i,trainEvents[i][2],testEvents[i][2]))
            print("Test More Event:")  
            for i in range(trainLen,testLen):
                print('{0}:{1}'.format(i,testEvents[i][2]))                   
    else:
        for i in range(len(trainEvents)):
            if(trainEvents[i][2]!=testEvents[i][2] and testEvents[i][2]!=783):
                print('{0} Different:{1}-{2}'.format(i,trainEvents[i][2],testEvents[i][2]))
                different=True
    if(different):
        print('Train event is Different with test event!')
    else:
        print('Train event is Same to test event!')
    return different

def CopyToTrain(src,fileName,trainPath,bandFolder,actName): 
    dst=joinPath(trainPath,bandFolder,'images',actName)
    if(not os.path.exists(dst)):
        os.makedirs(dst)    
    dst=os.path.join(dst,fileName)
    shutil.copy(src, dst)
    
def CreateTestImg(cf,raw,events,epochLogFile,epochParas,bandGroupModes,trainParas): 
    #Be Careful!!! Fit for the EpochParas have 100 Key.    
    getExist=int(cf.get('S1','getExistTestImg'))==1
    imageFolder=cf.get("S1", "testFolder")
    #eventDic={769:'left',770:'right',771:'foot',772:'tongue'}
    global runLog
    runLog = plumLog.createLog(imageFolder,'createRun')    
    mapSize=int(cf.get('S1','map_size'))
    doCut=int(cf.get('S1','doCut'))==1
    if(doCut):
        shape_L=float(cf.get('S1','shape_L'))
        shape_R=float(cf.get('S1','shape_R'))
        shape_U=float(cf.get('S1','shape_U'))
        shape_D=float(cf.get('S1','shape_D'))
        cut_shape=(shape_L,shape_U,shape_R,shape_D)
    else:
        cut_shape=None
    uEvents=np.unique(events[:,2])
    
    trainEventPath=cf.get("sysData", "initEventTrain")
    trainEvent=SaveFile.getRawDataFromFile(trainEventPath)
    testEventPath=cf.get("sysData", "eventTest")
    testEvent=SaveFile.getRawDataFromFile(testEventPath)
    trainFolder=cf.get("S1", "trainFolder")
    delEventIds=[276,277,1023,1072]
    trainEvent=delEvent(delEventIds,trainEvent)    
    testEvent=delEvent(delEventIds, testEvent)
    
    mITrainEvent=delEvent([768,32766],trainEvent)    
    mITestEvent=delEvent([768,32766], testEvent)
    unKnownIndexs=np.where(mITestEvent[:,2]==783)[0]     
    copyTest2Train=True
    if(cf.has_option('S1', 'copyTest2Train')):
        copyTest2Train=int(cf.get('S1', 'copyTest2Train'))==1
    try:        
        # Construct Epochs       
        freqs = np.arange(6., 36., 1.)#np.logspace(*np.log10([6, 35]), num=20)#      
        n_cycles = freqs / 2.  # different number of cycle per frequency
        
        for bgm in bandGroupModes:             
            bgmLog='freq_min={0},freq_max={1},mode={2},showSensor={3}'.format(bgm.Band.BandBegin,bgm.Band.BandEnd,bgm.Mode,bgm.Sensor)
            runLog.info(bgmLog)
            imgPath=joinPath(imageFolder,bgm.Group) 
            
            epochP100=epochParas[100] 
            CreateImageFromEpoch(raw,testEvent,32766,100,epochP100,freqs,n_cycles,bgm,imgPath,mapSize,cut_shape,epochLogFile,runLog,uEvents,getExist,copyTest2Train,trainFolder,trainParas[100].ActionName)
            CreateImageByTimeRange(raw,testEvent,768,100,epochP100,freqs,n_cycles,bgm,imgPath,mapSize,cut_shape,epochLogFile,runLog,uEvents,getExist,copyTest2Train,trainFolder,trainParas[100].ActionName)
            
            
            if IsDifferentTwoEvent(mITrainEvent,mITestEvent):
                return
            for event_id in epochParas.keys():                                 
                indexArr=np.where(uEvents==event_id)
                if(len(indexArr[0])==0):
                    continue
                epochP=epochParas[event_id]
                #If haven run,skip.
                epochFilePath=joinPath(imgPath,'images',epochP.ActionName,epochLogFile+'_'+str(event_id)+'.pkl')
                if getExist:            
                    if(os.path.exists(epochFilePath)):
                            continue   
                epochLog=[]
                epochs = mne.Epochs(raw, events, event_id, epochP.TMin, epochP.TMax, proj=True, baseline=epochP.Baseline,preload=True, reject=None, decim=4)
                epochs.resample(60., npad='auto')  #set resample to reduce computation time
                saveEventId=event_id
                
                for i in range(len(epochs)):                   
                    if(event_id==783):
                        saveEventId=mITrainEvent[unKnownIndexs[i]][2]
                    if(event_id==1024 or saveEventId==1024):
                        continue
                    cur_time=epochP.CurTime
                    if cur_time+epochP.TStep<=epochP.StopTime:
                        curEproch=None
                        curEproch= NeuroDataLog.EpochsLog(epochs[i])
                        power,_ = tfr_morlet(epochs[i], freqs=freqs, n_cycles=n_cycles, use_fft=True,return_itc=True, decim=3, n_jobs=1)
                        while cur_time+epochP.TStep<=epochP.StopTime:
                            pictureIndex=epochs.selection[i]
                            if(copyTest2Train):
                                pictureIndex+=10000
                            imgSrc,cutFileName,channelData,eegData,imgName=SaveFile.saveFig2(curPower=power, eve_id=saveEventId, actionName=epochP.ActionName, index=pictureIndex, time_min=cur_time, time_max=cur_time+epochP.TStep, 
                                                                             freq_min=bgm.Band.BandBegin, freq_max=bgm.Band.BandEnd, imgPath=imgPath, waveName=bgm.Band.BandName, baseline=epochP.Baseline,
                                                                             show_sensors=bgm.Sensor, map_size=mapSize, cut_box=cut_shape, mode=bgm.Mode, vmin=bgm.VMin, vmax=bgm.VMax)
                            if(len(curEproch.get_fileLog())<1000):             
                                curEproch.addFileLog(imgSrc,cutFileName,channelData,eegData)                                             
                            if(copyTest2Train):
                                if(doCut):                                                          
                                    CopyToTrain(cutFileName,imgName,trainFolder,bgm.Group+'_cut',trainParas[saveEventId].ActionName)
                                else:
                                    CopyToTrain(imgSrc,imgName,trainFolder,bgm.Group,trainParas[saveEventId].ActionName)
                            cur_time+=epochP.TStep
                        if curEproch!=None and len(epochLog)<100:                    
                            epochLog.append(curEproch)
                if(len(epochLog)>0):  
                    SaveFile.saveRawDataToFile(epochFilePath,epochLog)   
    except Exception as e:
        runLog.info(e) 