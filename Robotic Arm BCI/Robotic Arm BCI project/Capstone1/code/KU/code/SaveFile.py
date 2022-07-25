# -*- coding: UTF-8 -*- #
from PIL import Image
import pickle
import os
import matplotlib
matplotlib.use('AGG')
import matplotlib.pyplot as plt
import sys
sys.path.append('..')
from ComFun import joinPath

def saveFig(curPower,eve_id,actionName,index,time_min,time_max,freq_min,freq_max,imgPath,waveName,show_sensors,map_size,cut_box,mode='percent',vmin=-10,vmax=10,baseline=None,otherAppend=''):
    #This Function Modify in 2019-01-02
    
    #if(index(imgPath.index())
    imgFolder=joinPath(imgPath,"images",actionName)
    if not os.path.exists(imgFolder):
        os.makedirs(imgFolder)    
    #fig,channelData,eegData=curPower.plot_topomap( tmin=time_min, tmax=time_max, fmin=freq_min, fmax=freq_max,baseline=baseline,sensors=show_sensors,ch_type='eeg',  mode='logratio',size =map_size, show=False,colorbar=False,contours=0)
    if(baseline==None):
        fig,channelData,eegData=curPower.plot_topomap(tmin=time_min, tmax=time_max, fmin=freq_min, fmax=freq_max,sensors=show_sensors,ch_type='eeg',  mode=mode,size =map_size,vmin=vmin,vmax=vmax, show=False,colorbar=False,contours=0)
    else:
        fig,channelData,eegData=curPower.plot_topomap(tmin=time_min, tmax=time_max, fmin=freq_min, fmax=freq_max,baseline=baseline,sensors=show_sensors,ch_type='eeg',  mode=mode,size =map_size,vmin=vmin,vmax=vmax, show=False,colorbar=False,contours=0)
    fileName=waveName+'_'+str(eve_id)+'_'+str(index)+'_'+str('%.2f' %time_min)+'_'+str('%.2f' %time_max)+'_'+str(freq_min)+'_'+str(freq_max)+otherAppend+'.jpg'
    filePath=joinPath(imgPath,'images',actionName,fileName)
    fig.savefig(filePath)
    plt.close()
    if(cut_box!=None):
        #cut fig
        curImgPath=joinPath(imgPath+'_cut','images',actionName)
        if not os.path.exists(curImgPath):
            os.makedirs(curImgPath) 
        cutFileName=joinPath(curImgPath,fileName)        
        img_raw_data=Image.open(filePath)
        cutFig=img_raw_data.crop(cut_box)
        cutFig.save(cutFileName)        
        del cutFig
    else:
        cutFileName=''
    del fig
    
    return filePath,cutFileName,channelData,eegData,fileName

def saveFig2(curPower,eve_id,actionName,index,time_min,time_max,freq_min,freq_max,imgPath,waveName,baseline,show_sensors,map_size,cut_box,mode='percent',vmin=-10,vmax=10):
    
    #if(index(imgPath.index())
    imgFolder=joinPath(imgPath,actionName)
    if not os.path.exists(imgFolder):
        os.makedirs(imgFolder)    
    #fig,channelData,eegData=curPower.plot_topomap( tmin=time_min, tmax=time_max, fmin=freq_min, fmax=freq_max,baseline=baseline,sensors=show_sensors,ch_type='eeg',  mode='logratio',size =map_size, show=False,colorbar=False,contours=0)
    #2018-10-15
    fig,channelData,eegData=curPower.plot_topomap(tmin=time_min, tmax=time_max, fmin=freq_min, fmax=freq_max,baseline=baseline,sensors=show_sensors,ch_type='eeg',  mode=mode,size =map_size,vmin=vmin,vmax=vmax, show=False,colorbar=False,contours=0)
    fileName=waveName+'_'+str(eve_id)+'_'+str(index)+'_'+str('%.2f' %time_min)+'_'+str('%.2f' %time_max)+'_'+str(freq_min)+'_'+str(freq_max)+'.jpg'
    filePath=joinPath(imgFolder,fileName)
    fig.savefig(filePath)
    plt.close()
    if(cut_box!=None):
        #cut fig
        curImgPath=joinPath(imgPath+'_cut',actionName)
        if not os.path.exists(curImgPath):
            os.makedirs(curImgPath) 
        cutFileName=joinPath(curImgPath,fileName)        
        img_raw_data=Image.open(filePath)
        cutFig=img_raw_data.crop(cut_box)
        cutFig.save(cutFileName)        
        del cutFig
    else:
        cutFileName=''
    del fig
    
    return filePath,cutFileName,channelData,eegData,fileName

def saveRawDataToFile(file_path,raw_data):
    f = open(file_path,'wb')
    pickle.dump(raw_data,f)
    f.close()

def getRawDataFromFile(file_path):
    f=open(file_path,'rb')
    raw_data=pickle.load(f)
    f.close()
    return raw_data
