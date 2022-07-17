import sys
sys.path.append('..')
from EpochPara import ePara
from ComFun import Band,BandGroupMode

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

def createBandGroupMode(appendName='',doCut=False):
    band=Band(9, 30, 'AlphaBata' + appendName)  # 5
    groupModeList=[]
    cutAppend=''
    if doCut:
        cutAppend='_cut'
    groupName = str(band.BandBegin) + '-' + str(band.BandEnd) + '_Mean'+cutAppend
    bgm = BandGroupMode(band, groupName, 'mean', -0.5e-9, 4.e-9)  # 500MS,1S
    groupModeList.append(bgm)
    '''
    groupName = str(band.BandBegin) + '-' + str(band.BandEnd) + '_Rat'+cutAppend
    bgm = BandGroupMode(band, groupName, 'ratio', 10., 30.) # 1S,500MS,100MS
    groupModeList.append(bgm)
    '''
    groupName = str(band.BandBegin) + '-' + str(band.BandEnd) + '_Log'+cutAppend
    bgm = BandGroupMode(band, groupName, 'logratio', -1., 1.2)   # 100MS,500MS,300MS
    groupModeList.append(bgm)
    groupName = str(band.BandBegin) + '-' + str(band.BandEnd) + '_Per'+cutAppend
    bgm = BandGroupMode(band, groupName, 'percent', -2., 20.0)  # 500MS,1S
    groupModeList.append(bgm)
    groupName = str(band.BandBegin) + '-' + str(band.BandEnd) + '_Zsc'+cutAppend
    bgm = BandGroupMode(band, groupName, 'zscore', -0.5, 3.5) # 1S,500MS
    groupModeList.append(bgm)
    groupName = str(band.BandBegin) + '-' + str(band.BandEnd) + '_Zlo'+cutAppend
    bgm = BandGroupMode(band, groupName, 'zlogratio', -2.2, 2.2)  # 1S,500MS
    groupModeList.append(bgm)

    return groupModeList

def getEpochPara(timeStep=0.3,windowSize=0.5):
    epochParas={2:ePara('left',1.,5.,timeStep, None,1.,4.,wsize=windowSize),#769
               1:ePara('right',1.,5.,timeStep, None,1.,4.,wsize=windowSize),#770
               3:ePara('other',0.2,2,timeStep, None,0.2,wsize=windowSize)}
    return epochParas