#1S_9-20
import sys
sys.path.append('..')
from CommonFum import Band,BandGroupMode
from EpochPara import ePara


def createBandList(appendName=''):
    bList=[]
    
    b=Band(9,13,'Alpha'+appendName)#0
    bList.append(b)    
    b=Band(9,20,'AlpBetaSma'+appendName)#1
    bList.append(b)    
    b=Band(12,20,'Beta'+appendName)#2
    bList.append(b)
    b=Band(16,20,'BetaMiddle'+appendName)#3
    bList.append(b)
    b=Band(14,30,'BetaBig'+appendName)#4
    bList.append(b)
    b=Band(9,30,'AlphaBata'+appendName)#5
    bList.append(b)
    
    return bList

def createBandFolderList(doCut,appendName=''):
    bandFolderList=[]
    groupModeList=createBandGroupMode(appendName)
    if(doCut):
        for gm in groupModeList:
            bandFolderList.append(gm.Group+'_cut')
    else:
        for gm in groupModeList:
            bandFolderList.append(gm.Group)
    return bandFolderList

def createBandGroupMode(appendName=''):
    bandList=createBandList(appendName)
    groupModeList=[]
    for band in bandList:
        '''
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Mean'
        bgm=BandGroupMode(band,groupName,'mean',-3e-10,3e-10)
        #bgm=BandGroupMode(band,groupName,'mean',1e-11,3e-10)
        groupModeList.append(bgm)       
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Rat'
        bgm=BandGroupMode(band,groupName,'ratio',0.,5.)
        groupModeList.append(bgm)
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Log'
        bgm=BandGroupMode(band,groupName,'logratio',-2.,0.)
        groupModeList.append(bgm)
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Per'
        bgm=BandGroupMode(band,groupName,'percent',-10.,10.)
        groupModeList.append(bgm)
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Zsc'
        bgm=BandGroupMode(band,groupName,'zscore',-1.,5.)
        groupModeList.append(bgm)
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Zlo'
        bgm=BandGroupMode(band,groupName,'zlogratio',-2.,2.)
        groupModeList.append(bgm)  
        '''
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Mean'
        #bgm=BandGroupMode(band,groupName,'mean',-3.0e-10,3.0e-10)#100MS,300MS
        bgm=BandGroupMode(band,groupName,'mean',-4.7e-10,4.7e-10)#500MS,1S        
        groupModeList.append(bgm)       
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Rat'        
        bgm=BandGroupMode(band,groupName,'ratio',-1.0,5.5)#1S,500MS,100MS
        groupModeList.append(bgm)
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Log'        
        bgm=BandGroupMode(band,groupName,'logratio',-2.1,0.4)#100MS,500MS,300MS
        groupModeList.append(bgm)
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Per'
        #bgm=BandGroupMode(band,groupName,'percent',-2.,2.)#100MS
        bgm=BandGroupMode(band,groupName,'percent',-2.,3.0)#500MS,1S
        groupModeList.append(bgm)
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Zsc'        
        bgm=BandGroupMode(band,groupName,'zscore',-2.,4.)#1S,500MS
        #bgm=BandGroupMode(band,groupName,'zscore',-1.,1.)#100MS
        groupModeList.append(bgm)
        groupName=str(band.BandBegin)+'-'+str(band.BandEnd)+'_Zlo'
        #bgm=BandGroupMode(band,groupName,'zlogratio',-3.2,1.5)#100MS
        bgm=BandGroupMode(band,groupName,'zlogratio',-2.2,1.5)#1S,500MS      
        groupModeList.append(bgm)
    return groupModeList

classes= ['left','right','foot','tongue','other']
def trainEpochPara(timeStep=0.5): 
    epochParas={
                769:ePara('left',1.,5.,timeStep, None,1.,4.),
               770:ePara('right',1.,5.,timeStep, None,1.,4.),
               771:ePara('foot',1.,5.,timeStep, None,1.,4.),
               772:ePara('tongue',1.,5.,timeStep, None,1.,4.),
               #1024:ePara('relax',1.,5.,timeStep,(4., 5.),1.,4.),
               100:ePara('other',0.2,2,timeStep, None,0.2)
               }
    return epochParas
 
def testEpochPara(timeStep=0.5):    
    epochParas={783:ePara('unknown',1.,5.,timeStep, None,1.,4.),
                #1024:ePara('relax',1.,5.,timeStep,(4., 5.),1.,4.),
                100:ePara('unknown',0.2,2,timeStep, None,0.2)}
    return epochParas   
