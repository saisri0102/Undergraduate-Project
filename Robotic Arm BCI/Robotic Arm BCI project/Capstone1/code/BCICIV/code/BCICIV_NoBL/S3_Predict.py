import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
import sys
sys.path.append('..')
import configparser
import multiprocessing
import time   
from BCICIV_NoBL.BandList import createBandFolderList,trainEpochPara
from CommonFum import joinPath
import numpy as np
from S3 import runPredict
from BCICIV_Comm.Result import ShowBestMeda

if __name__ == '__main__':
    cf = configparser.ConfigParser()
    cf.read("BCIPara.ini")
    
    #subject_path=cf.get('S1','imageFolder')
    trainPath=cf.get('S1','trainFolder')
    testPath=cf.get('S1','testFolder')
    trainFolderAppend=cf.get('S2','trainFolderAppend')
    
    bandNum=int(cf.get('S1', 'bandCount'))
    img_width=int(cf.get('CNN','img_width'))
    img_height=int(cf.get('CNN','img_height'))
    resultFile=cf.get('S2','resultFile')
    predictNum=int(cf.get('S3','predictNum'))
    bestMedas=[]
    getExistPredict=True if int(cf.get('S3','getExistPredict'))==1 else False 
    getExistAccuRate=True if int(cf.get('S3','getExistAccuRate'))==1 else False
    doCut=int(cf.get('S1','doCut'))==1
    label=cf.get("data",'label')
    bandFolderList=createBandFolderList(doCut,label)
    bandIndex=int(cf.get('S1', 'testFreBandIndex'))
    selBandGroupModes=[]
    for i in np.arange(bandIndex*bandNum,(bandIndex+1)*bandNum,1):
    #for i in np.arange(70,71,1):
        bgm=bandFolderList[i]
        selBandGroupModes.append(bgm) 
    
    ts=float(cf.get('S1', 'trainTimeStep'))
    trainDic=trainEpochPara(ts) 
    #Step 3 Predict      
    startAgain=True
    while startAgain:
        startAgain=False
        preExisted=0    
        startTime=time.time()
        #passHour=0
        while(preExisted<len(selBandGroupModes)):
            activePrecess=multiprocessing.active_children()
            while(len(activePrecess)<predictNum and preExisted<len(selBandGroupModes)):                
                print('Predict:'+selBandGroupModes[preExisted])            
                p=multiprocessing.Process(target=runPredict,args=[cf,trainPath,testPath,selBandGroupModes[preExisted],resultFile,img_width,img_height,getExistPredict,getExistAccuRate,trainFolderAppend,trainDic,5])
                preExisted=preExisted+1
                p.start()
                activePrecess=multiprocessing.active_children()
            for p in multiprocessing.active_children():
                print("child   p.name:" + p.name + "\tp.id:" + str(p.pid))
            time.sleep(120)    
            curTime=time.time()
            if curTime-startTime>=5400:
                activePrecess=multiprocessing.active_children()
                if len(activePrecess)>0:
                    for p in multiprocessing.active_children():
                        p.terminate() 
                        p.join()
                    startAgain=True
                    continue  
           
        activePrecess=multiprocessing.active_children()
        while (len(activePrecess)>0):
            for p in multiprocessing.active_children():
                print("child   p.name:" + p.name + "\tp.id:" + str(p.pid))
            time.sleep(120)
            activePrecess=multiprocessing.active_children()
            curTime=time.time()  
            if curTime-startTime>=5400:
                if len(activePrecess)>0:
                    for p in multiprocessing.active_children():
                        p.terminate() 
                        p.join()
                    startAgain=True
                    continue   
            
    print("Predict END!!!!!!!!!!!!!!!!!")
    print(testPath)
    #Show Result
    print('---------------Default---------------')
    bestPrePath=joinPath(testPath,'bestMedas_0.pkl')     
    ShowBestMeda(bestPrePath)
    
    print('---------------Case 1---------------')
    bestPrePath=joinPath(testPath,'bestMedas_1.pkl') 
    ShowBestMeda(bestPrePath)
    print('---------------Case 2---------------')
    bestPrePath=joinPath(testPath,'bestMedas_2.pkl')     
    ShowBestMeda(bestPrePath)