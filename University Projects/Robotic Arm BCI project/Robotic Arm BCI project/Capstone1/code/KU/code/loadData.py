import numpy as np
import pandas as pd
from sklearn.utils import shuffle
import scipy.io as scio
from mne.io import RawArray
from mne.channels import read_montage
from mne import create_info, concatenate_raws, pick_types
from sklearn.base import BaseEstimator, TransformerMixin
from glob import glob
import sys
sys.path.append('..')
import os
from ComFun import joinPath,getRawDataFromFile,saveRawDataToFile
import mne
from sklearn.preprocessing import LabelBinarizer

def get_channelName():
    return  ['FP1','FP2','F7','F3','FZ','F4','F8','FC5','FC1','FC2','FC6','T7','C3','CZ','C4','T8','TP9','CP5','CP1','CP2','CP6','TP10',
'P7','P3','PZ','P4','P8','PO9','O1','OZ','O2','PO8','FC3','FC4','C5','C1','C2','C6','CP3','CPZ','CP4','P1','P2','POZ','FT9',
'FTT9H','TPP7H','TP7','TPP9H','FT10','FTT10H','TPP8H','TP8','TPP10H','F9','F10','AF7','AF3','AF4','AF8','PO3','PO4']

def get_index_channel():
    return {1:'FP1',2:'FP2',3:'F7',4:'F3',5:'FZ',6:'F4',7:'F8',8:'FC5',9:'FC1',10:'FC2',11:'FC6',12:'T7',13:'C3',14:'CZ',15:'C4',16:'T8',
17:'TP9',18:'CP5',19:'CP1',20:'CP2',21:'CP6',22:'TP10',23:'P7',24:'P3',25:'PZ',26:'P4',27:'P8',28:'PO9',29:'O1',30:'OZ',
31:'O2',32:'PO8',33:'FC3',34:'FC4',35:'C5',36:'C1',37:'C2',38:'C6',39:'CP3',40:'CPZ',41:'CP4',42:'P1',43:'P2',44:'POZ',
45:'FT9',46:'FTT9H',47:'TPP7H',48:'TP7',49:'TPP9H',50:'FT10',51:'FTT10H',52:'TPP8H',53:'TP8',54:'TPP10H',55:'F9',56:'F10',
57:'AF7',58:'AF3',59:'AF4',60:'AF8',61:'PO3',62:'PO4'}

def get_index_MIchannel():
    return {8:'FC5',9:'FC1',10:'FC2',11:'FC6',13:'C3',14:'CZ',15:'C4',18:'CP5',19:'CP1',20:'CP2',21:'CP6',24:'P3',25:'PZ',26:'P4'
        ,33:'FC3',34:'FC4',35:'C5',36:'C1',37:'C2',38:'C6',39:'CP3',40:'CPZ',41:'CP4',42:'P1',43:'P2'}

def get_channel_index():
    return {'FP1':1,'FP2':2,'F7':3,'F3':4,'FZ':5,'F4':6,'F8':7,'FC5':8,'FC1':9,'FC2':10,'FC6':11,'T7':12,'C3':13,'CZ':14,'C4':15,'T8':16,
'TP9':17,'CP5':18,'CP1':19,'CP2':20,'CP6':21,'TP10':22,'P7':23,'P3':24,'PZ':25,'P4':26,'P8':27,'PO9':28,'O1':29,'OZ':30,
'O2':31,'PO8':32,'FC3':33,'FC4':34,'C5':35,'C1':36,'C2':37,'C6':38,'CP3':39,'CPZ':40,'CP4':41,'P1':42,'P2':43,'POZ':44,
'FT9':45,'FTT9H':46,'TPP7H':47,'TP7':48,'TPP9H':49,'FT10':50,'FTT10H':51,'TPP8H':52,'TP8':53,'TPP10H':54,'F9':55,'F10':56,
'AF7':57,'AF3':58,'AF4':59,'AF8':60,'PO3':61,'PO4':62}

def getEvent():
    return {1:{'Name':'right','StaTime':[0],'TimeSpan':4000,'IsExtend':False},
            2:{'Name':'left','StaTime':[0],'TimeSpan':4000,'IsExtend':False},
            3:{'Name': 'other','StaTime':[4000],'TimeSpan':0,'PreEndTime':0,'IsExtend':True}}

eventClass={'right':1,'left':2,'other':3}

label_binarizer = LabelBinarizer()
label_binarizer.fit(list(getEvent().keys()))#eventClass
def one_hot_encode(arr_label):
    return label_binarizer.transform(arr_label)

def load_raw_data(subjects,yml,test=False):
    if test:
        folders=yml['Meta']['testFolder']
        keys=yml['Meta']['testKey']
    else:
        folders=yml['Meta']['trainFolder']
        keys=yml['Meta']['trainKey']
    reCreate=False
    if 'reCreate' in yml['Meta']:
        reCreate=yml['Meta']['reCreate']
    #allRaw=[]
    #allEvents=[]
    allData=[]

    for sub in subjects:
        for folder in folders:
            type = '%s_%s_s%d' % (yml['Meta']['segmentName'], folder, sub)
            pklFile = joinPath(yml['Meta']['basicFolder'], 'learnData', '%s.pkl' % type)
            if not reCreate and os.path.exists(pklFile):
                subData=getRawDataFromFile(pklFile)
            else:
                fname=joinPath(yml['Meta']['initDataFolder'],folder,'s%d'%sub,'EEG_MI.mat')
                matlab_data = scio.loadmat(fname)
                for k in keys:
                    raw,events=getRawEvent(matlab_data, k, fname, yml)
                    events=np.array(events,dtype='int32')
                    subData={'Type':type,'Raw':raw,'Event':events}
                    saveRawDataToFile(pklFile,subData)
            allData.append(subData)
    return allData

#According to the vacabular of eventDic, set the splitting event
def getSplitEvent(eveKey,evePara,curTime,endTime):
    addEveArray=[]
    for i in range(len(evePara['StaTime'])):
        if evePara['TimeSpan']==0:
            #timeSpan = endTime-curTime + evePara['StaTime'][i]-evePara['PreEndTime']
            timeSpan=endTime-(curTime+evePara['StaTime'][i])-evePara['PreEndTime']
        else:
            timeSpan=evePara['TimeSpan']
        addEveArray.append([curTime+ evePara['StaTime'][i],timeSpan,eveKey])
    return addEveArray


def getRawEvent(matlab_data,key,fname,yml):
    dataset = matlab_data[key][0][0]
    data = np.array(dataset['x'])*1e-6
    datashape = data.shape
    # channelIndex = list(index_channel.keys())
    eventTime = np.array(dataset['t'][0])
    label_1d = np.array(dataset['y_dec'][0])
    eventData = []
    # eventData.append([0,eventTime[0][0]-1,3])
    lastEveIndex = len(eventTime) - 1
    eventTypeDic = getEvent()
    for i in range(lastEveIndex):
        for key, value in eventTypeDic.items():
            if value['IsExtend'] == True:
                eventData.extend(getSplitEvent(key, value, eventTime[i], eventTime[i + 1]))
            elif key == label_1d[i]:
                eventData.extend(getSplitEvent(key, value, eventTime[i], eventTime[i + 1]))
    for key, value in eventTypeDic.items():
        if value['IsExtend'] == True:
            eventData.extend(getSplitEvent(key, value, eventTime[lastEveIndex], datashape[0] - 1))
        elif key == label_1d[lastEveIndex]:
            eventData.extend(getSplitEvent(key, value, eventTime[lastEveIndex], datashape[0] - 1))
    eventData.sort(key=lambda ed: ed[0])
    ch_names = get_channelName()
    ch_type = ['eeg' for i in range(len(ch_names))]

    # Add Event hot code into data
    # data=data.T
    data = np.pad(data, ((0, 0), (0, len(eventTypeDic))))
    data[0:eventData[0][0], -3:] = one_hot_encode([yml['Meta']['otherEventCode'] for j in range(eventData[0][0])])
    for ed in eventData:
        data[ed[0]:ed[0] + ed[1], -3:] = one_hot_encode([ed[2] for j in range(ed[1])])

    ch_type.extend(['stim'] * len(eventTypeDic))
    mi_channelIndex=get_index_MIchannel().keys()
    for i in range(len(ch_type)):
        if i not in mi_channelIndex:
            ch_type[i]='stim'
    ch_names.extend([eValue['Name'] for eValue in eventTypeDic.values()])
    # dataset.append(matlab_data[k][0][0])

    # read EEG standard montage from mne
    montage = read_montage('standard_1005', ch_names)
    info = mne.create_info(ch_names=ch_names, sfreq=yml['Meta']['frequency'], ch_types=ch_type, montage=montage)
    #info['filename'] = fname
    # data = 1e-6*np.array(data[ch_names]).T
    # data = np.array(data[ch_names]).T
    # create raw object
    raw = RawArray(data.T, info, verbose=False)
    raw.add_events(eventData)
    #return {'Raw':raw,'Event': eventData}
    return raw,eventData

def getRawEvent_2(matlab_data,key,fname,yml):
    #The value of channel which is not in MI area is seted 0.
    dataset = matlab_data[key][0][0]
    data = np.array(dataset['x'])*1e-6
    datashape = data.shape
    # channelIndex = list(index_channel.keys())
    eventTime = np.array(dataset['t'][0])
    label_1d = np.array(dataset['y_dec'][0])
    eventData = []
    # eventData.append([0,eventTime[0][0]-1,3])
    lastEveIndex = len(eventTime) - 1
    eventTypeDic = getEvent()
    for i in range(lastEveIndex):
        for key, value in eventTypeDic.items():
            if value['IsExtend'] == True:
                eventData.extend(getSplitEvent(key, value, eventTime[i], eventTime[i + 1]))
            elif key == label_1d[i]:
                eventData.extend(getSplitEvent(key, value, eventTime[i], eventTime[i + 1]))
    for key, value in eventTypeDic.items():
        if value['IsExtend'] == True:
            eventData.extend(getSplitEvent(key, value, eventTime[lastEveIndex], datashape[0] - 1))
        elif key == label_1d[lastEveIndex]:
            eventData.extend(getSplitEvent(key, value, eventTime[lastEveIndex], datashape[0] - 1))
    eventData.sort(key=lambda ed: ed[0])
    ch_names = get_channelName()
    ch_type = ['eeg' for i in range(len(ch_names))]

    # Add Event hot code into data
    # data=data.T
    mi_channelIndex=get_index_MIchannel().keys()
    for i in mi_channelIndex:
        data[:,i]=0
    data = np.pad(data, ((0, 0), (0, len(eventTypeDic))))
    data[0:eventData[0][0], -3:] = one_hot_encode([yml['Meta']['otherEventCode'] for j in range(eventData[0][0])])
    for ed in eventData:
        data[ed[0]:ed[0] + ed[1], -3:] = one_hot_encode([ed[2] for j in range(ed[1])])

    ch_type.extend(['stim'] * len(eventTypeDic))

    ch_names.extend([eValue['Name'] for eValue in eventTypeDic.values()])
    # dataset.append(matlab_data[k][0][0])

    # read EEG standard montage from mne
    montage = read_montage('standard_1005', ch_names)
    info = mne.create_info(ch_names=ch_names, sfreq=yml['Meta']['frequency'], ch_types=ch_type, montage=montage)
    #info['filename'] = fname
    # data = 1e-6*np.array(data[ch_names]).T
    # data = np.array(data[ch_names]).T
    # create raw object
    raw = RawArray(data.T, info, verbose=False)
    raw.add_events(eventData)
    #return {'Raw':raw,'Event': eventData}
    return raw,eventData

'''
def getEpochs(fname,keys,yml):
    matlab_data = scio.loadmat(fname)
    dataset = []
    for k in keys:
        dataset = matlab_data[k][0][0]
        data = np.array(dataset['x'])
        datashape = data.shape
        # channelIndex = list(index_channel.keys())
        eventTime = np.array(dataset['t'][0])
        label_1d = np.array(dataset['y_dec'][0])
        eventData = []
        # eventData.append([0,eventTime[0][0]-1,3])
        lastEveIndex = len(eventTime) - 1
        eventTypeDic = getEvent()
        for i in range(lastEveIndex):
            for key, value in eventTypeDic.items():
                if value['IsExtend'] == True:
                    eventData.extend(getSplitEvent(key, value, eventTime[i], eventTime[i + 1]))
                elif key == label_1d[i]:
                    eventData.extend(getSplitEvent(key, value, eventTime[i], eventTime[i + 1]))
        for key, value in eventTypeDic.items():
            if value['IsExtend'] == True:
                eventData.extend(getSplitEvent(key, value, eventTime[lastEveIndex], datashape[0] - 1))
            elif key == label_1d[lastEveIndex]:
                eventData.extend(getSplitEvent(key, value, eventTime[lastEveIndex], datashape[0] - 1))
        eventData.sort(key=lambda ed: ed[0])
        ch_names = get_channelName()
        ch_type = ['eeg' for i in range(len(ch_names))]

        epoch_data=data[0:eventData[0][0]].T
        epoch_data=epoch_data.reshape(1, epoch_data.shape[0], epoch_data.shape[1])
        for ed in eventData:
            curData=data[ed[0]:ed[0]+ed[1]].T
            curData=curData.reshape(1,curData.shape[0],curData.shape[1])
            epoch_data=np.append(epoch_data,data[ed[0]:ed[0]+ed[1]].T)
        montage = read_montage('standard_1005', ch_names)
        info = mne.create_info(ch_names=ch_names, sfreq=yml['Meta']['frequency'], ch_types=ch_type, montage=montage)
        info['filename'] = fname
        events=np.array(eventData,dtype='int32')
        epochs = mne.EpochsArray(epoch_data, info=info, events=eventData, event_id={'arbitrary': 1, 'visual': 3})
        dict(auditory=1, visual=3)
'''

