# -*- coding: UTF-8 -*- #
from PIL import Image
import pickle

def saveFig(curPower,eve_id,index,time_min,time_max,freq_min,freq_max,imgPath,waveName,baseline,show_sensors,map_size,cut_box,indexAppend=''):
    
    import os
    import matplotlib.pyplot as plt
    
    if not os.path.exists(imgPath+'//'+str(eve_id)):
        os.makedirs(imgPath+'//'+str(eve_id))    
    fig,channelData=curPower.plot_topomap( tmin=time_min, tmax=time_max, fmin=freq_min, fmax=freq_max,baseline=baseline,sensors=show_sensors,ch_type='eeg',  mode='logratio',size =map_size, show=False,colorbar=False,contours=0)
    fileName=imgPath+'//'+str(eve_id)+'//'+waveName+'_'+str(eve_id)+'_'+str(index)+'_'+str('%.0f' %time_min)+'_'+str('%.0f' %time_max)+'_'+str(freq_min)+'_'+str(freq_max)+indexAppend+'.jpg'
    fig.savefig(fileName)
    plt.close()#涓�瀹氳鍔狅紝涓嶇劧鍐呭瓨浼氬婧�
    #cut fig
    imgPath+='_cut'+'//'+str(eve_id)
    if not os.path.exists(imgPath):
        os.makedirs(imgPath)     
    cutFileName=imgPath+'//'+waveName+'_'+str(eve_id)+'_'+str(index)+'_'+str('%.0f' %time_min)+'_'+str('%.0f' %time_max)+'_'+str(freq_min)+'_'+str(freq_max)+indexAppend+'.jpg'
    img_raw_data=Image.open(fileName)
    cutFig=img_raw_data.crop(cut_box)
    cutFig.save(cutFileName)
    return fileName,cutFileName,channelData

#region 淇濆瓨銆佽鍙朠ython鏁版嵁鍘熷鏂囦欢
def saveRawDataToFile(file_path,raw_data):
    f = open(file_path,'wb')
    pickle.dump(raw_data,f)
    f.close()

def getRawDataFromFile(file_path):
    f=open(file_path,'rb')
    raw_data=pickle.load(f)
    f.close()
    return raw_data
#endregion

def joinPath(*subPath):
    import os
    path=''
    for p in subPath:
        path=os.path.join(path,p)  
    if(path.startswith('../')):
        path=path.replace('\\','/')
    return path.replace('\r','\\r').replace('\n', '\\n')

def createFolder(dstFilePath):
    import os
    splitPath='/'
    folderList=os.path.splitext(dstFilePath)[0].split(splitPath)
    if(len(folderList)<3):
        splitPath='\\'
        folderList=os.path.splitext(dstFilePath)[0].split(splitPath)
    curFolder=''
    for fl in folderList:
        curFolder+=fl+splitPath
        if curFolder!=splitPath and not os.path.exists(curFolder):
            os.makedirs(curFolder)

def moveFile(filePath,moveFolderKey,replaceFolderKey):
    import os
    import shutil
    path, filename = os.path.split(filePath)
    if path.find(replaceFolderKey)>0:
        dsc=path.replace(replaceFolderKey,moveFolderKey)        
    else:      
        dsc=joinPath(path,moveFolderKey)
    if not os.path.exists(dsc):
        os.makedirs(dsc)
    dsc=joinPath(dsc,filename)
    shutil.move(filePath,dsc)
        
class PicLog:    
    def __init__(self,pic_path,pic_cut_path,img_data):
        self.set_picPath(pic_path)
        self.set_picCutPath(pic_cut_path)
        self.set_imgData(img_data)

    def set_picPath(self,pic_path):
        self.picPath=pic_path
    def get_picPath(self):
        return self.picPath

    def set_picCutPath(self,pic_cut_path):
        self.picCutPath=pic_cut_path
    def get_picCutPath(self):
        return self.picCutPath

    def set_imgData(self,img_data):
        self.set_imgData=img_data
    def get_imgData(self):
        return self.set_imgData

class EpochsLog:    
    def __init__(self,epoch):
        self.epoch=epoch

    def set_epoch(self,epoch):
        self.epoch=epoch
    def get_epoch(self):
        return self.epoch

    def get_fileLog(self):
        return self.fileLog;
    fileLog={}
    def addFileLog(self,groupName,picPath,cutPicPath,imgData):
        addPic=PicLog(picPath,cutPicPath,imgData)
        if(groupName not in self.fileLog.keys()):
            self.fileLog[groupName]=[]
        self.fileLog[groupName].append(addPic)
            

class Band:
    def __init__(self,bandBegin,bandEnd,bandName):
        self.BandBegin=bandBegin
        self.BandEnd=bandEnd
        self.BandName=bandName
        
class BandGroupMode:
    def __init__(self,band,group,mode,vmin=-1,vmax=1,sensor=False):
        self.Band=band
        self.Group=group
        self.Mode=mode
        self.VMin=vmin
        self.VMax=vmax
        self.Sensor=sensor