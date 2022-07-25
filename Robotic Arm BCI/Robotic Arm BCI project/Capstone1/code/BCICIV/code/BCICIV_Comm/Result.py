import sys
sys.path.append('..')
from SaveFile import getRawDataFromFile, saveRawDataToFile
from CommonFum import joinPath
import os

def ShowBestMedaAndTrain(bestPrePath,trainPath,trainFolderAppend,trainLogFile):
    bestMedas=getRawDataFromFile(bestPrePath)
    print('Band Name \t Accuracy Rate \t Iteration \t validationAccuracy \t trainingAccuracy \t validationLoss \t CKPT Path \t Meda Path')
    for bm in bestMedas:
        if bm==None:
            continue
        trainLogPath=joinPath(trainPath,bm.bandName,'trainResult'+trainFolderAppend,trainLogFile)
        if os.path.exists(trainLogPath):
            trainLogs=getRawDataFromFile(trainLogPath)
            flText=os.path.splitext(bm.ckptPath)
            numIndex=int(flText[len(flText)-1].split('-')[1])
            for tl in trainLogs:
                if(tl.get_iteration()==numIndex):
                    print('{0} \t {1} \t {2} \t {3} \t {4} \t {5} \t {6} \t {7}'.format(bm.bandName,bm.accRate,numIndex,tl.get_validationAccuracy(),tl.get_trainingAccuracy(),tl.get_validationLoss(),bm.ckptPath,bm.metaPath))
                    break
                
def GroupAccuracyRate(pg,root,fl):
    accuRateList=getRawDataFromFile(joinPath(root,fl))
    for ar in accuRateList:
        ckpt=ar.get_ckptPath()
        flText=os.path.splitext(ckpt)
        numIndex=int(flText[len(flText)-1].split('-')[1])
        if(numIndex<=5000):
            if ar.get_accRate()>pg['5AccRate']:
                pg['5AccRate']=ar.get_accRate()
                pg['5Index']=numIndex
        if(numIndex<=10000):
            if ar.get_accRate()>pg['10AccRate']:
                pg['10AccRate']=ar.get_accRate()
                pg['10Index']=numIndex
        if(numIndex<=20000):
            if ar.get_accRate()>pg['20AccRate']:
                pg['20AccRate']=ar.get_accRate()
                pg['20Index']=numIndex
        if(numIndex<=30000):
            if ar.get_accRate()>pg['30AccRate']:
                pg['30AccRate']=ar.get_accRate()
                pg['30Index']=numIndex
        if(numIndex<=40000):
            if ar.get_accRate()>pg['40AccRate']:
                pg['40AccRate']=ar.get_accRate()
                pg['40Index']=numIndex
        if(numIndex<=50000):
            if ar.get_accRate()>pg['50AccRate']:
                pg['50AccRate']=ar.get_accRate()
                pg['50Index']=numIndex
        if(numIndex<=60000):
            if ar.get_accRate()>pg['60AccRate']:
                pg['60AccRate']=ar.get_accRate()
                pg['60Index']=numIndex
        if(numIndex<=70000):
            if ar.get_accRate()>pg['70AccRate']:
                pg['70AccRate']=ar.get_accRate()
                pg['70Index']=numIndex
        if(numIndex<=80000):
            if ar.get_accRate()>pg['80AccRate']:
                pg['80AccRate']=ar.get_accRate()
                pg['80Index']=numIndex
        if(numIndex<=90000):
            if ar.get_accRate()>pg['90AccRate']:
                pg['90AccRate']=ar.get_accRate()
                pg['90Index']=numIndex
        if(numIndex<=100000):
            if ar.get_accRate()>pg['100AccRate']:
                pg['100AccRate']=ar.get_accRate()
                pg['100Index']=numIndex
                
def ShowPreGroup(preGroup):
    print('Band Folder \t 0-5000 Index \t 0-5000 Accuracy \t 0-10000 Index \t 0-10000 Accuracy \t 0-20000 Index \t 0-20000 Accuracy \t 0-30000 Index \t 0-30000 Accuracy \t 0-40000 Index \t 0-40000 Accuracy \t 0-50000 Index \t 0-50000 Accuracy \t 0-60000 Index \t 0-60000 Accuracy \t 0-70000 Index \t 0-70000 Accuracy \t 0-80000 Index \t 0-80000 Accuracy \t 0-90000 Index \t 0-90000 Accuracy \t 0-100000 Index \t 0-100000 Accuracy')
    for pg in preGroup:
        print('{0} \t {1} \t {2} \t {3} \t {4} \t {5} \t {6} \t {7} \t {8} \t {9} \t {10} \t {11} \t {12} \t {13} \t {14} \t {15} \t {16} \t {17} \t {18} \t {19} \t {20} \t {21} \t {22}'.format(pg['BandFolder'], pg['5Index'],pg['5AccRate'], pg['10Index'],pg['10AccRate'], pg['20Index'],pg['20AccRate'], pg['30Index'],pg['30AccRate'], pg['40Index'],pg['40AccRate'], pg['50Index'],pg['50AccRate'], pg['60Index'],pg['60AccRate'], pg['70Index'],pg['70AccRate'], pg['80Index'],pg['80AccRate'], pg['90Index'],pg['90AccRate'], pg['100Index'],pg['100AccRate']))        

def ShowBestMeda(bestPrePath):
    bestMedas=getRawDataFromFile(bestPrePath)
    print('Band Name \t Accuracy Rate \t CKPT Path \t Meda Path')
    for bm in bestMedas:
        if bm!=None:
            print('{0} \t {1} \t {2} \t {3}'.format(bm.bandName,bm.accRate,bm.ckptPath,bm.metaPath))
    
def ShowTrainResult(resultPath):
    if os.path.exists(resultPath):
        resultList=getRawDataFromFile(resultPath)    
        print('Iteration\tTraining Accuracy\tValidation Accuracy\tValidation Loss')
        for r in resultList:
            print('{0}\t{1}\t{2}\t{3}'.format(r.iteration,r.trainingAccuracy,r.validationAccuracy,r.validationLoss))
        
def CountEpochLog(badGroupModes,epochPara,dataFolder,epochFileName):
    countList={}
    haveCountList=[]
    for bgm in badGroupModes:  
        for key,value in epochPara.items():
            epochLogFolder=joinPath(dataFolder,bgm.Group,'images',value.ActionName)            
            if not os.path.exists(epochLogFolder):
                continue
            for root, _, files in os.walk(epochLogFolder):
                for f in files:
                    if f.startswith(epochFileName) and f.endswith('pkl'):
                        try:
                            epochLogPath=joinPath(root,f)
                            if epochLogPath not in haveCountList:
                                haveCountList.append(epochLogPath)
                                event_id=os.path.splitext(f)[0].split('_')[1]
                                epochList=getRawDataFromFile(epochLogPath)
                                totalCount=0
                                overMinValues=[]
                                overMaxValues=[] 
                                minValue=0.
                                minMean=0.
                                maxValue=0.  
                                maxMean=0.
                                for epochLog in epochList:
                                    totalCount+=len(epochLog.fileLog)
                                    for fl in epochLog.fileLog:                                
                                        if len(fl.imgData)==0:
                                            continue
                                        curMin=fl.imgData.min()
                                        if minValue==0.:
                                            minValue=curMin
                                        if minValue>curMin: 
                                            minValue=curMin                                          
                                        if curMin<bgm.VMin:
                                            overMinValues.append(curMin)
                                        minMean+= curMin
                                           
                                        curMax=fl.imgData.max()
                                        if maxValue==0.:
                                            maxValue=curMax
                                        if maxValue<curMax:
                                            maxValue=curMax
                                        if curMax>bgm.VMax:
                                            overMaxValues.append(curMax)
                                        maxMean+=curMax
                                if totalCount>0:
                                    minMean=minMean/totalCount
                                    maxMean=maxMean/totalCount 
                                    if bgm.Group not in countList.keys():
                                        countList[bgm.Group]=[]
                                    countList[bgm.Group].append({'Event_Id':event_id,'OverMinValue':overMinValues,'MinMean':minMean,'MinValue':minValue,'OverMaxValue':overMaxValues,'MaxMean':maxMean,'MaxValue':maxValue,'TotalCount':totalCount,'FilePath':epochLogPath})
                        except Exception as e:
                            print(e) 
    print('Group Name\tEvent Id\tTotal Num.\tOver Min Num.\tMin Mean\tMin Value\tOver Max Num.\tMax Mean\tMax Value\tFile Path')
    for key,value in countList.items():
        for eventV in value:
            print('{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}\t{8}\t{9}'.format(key,eventV['Event_Id'],eventV['TotalCount'],len(eventV['OverMinValue']),eventV['MinMean'],eventV['MinValue'],len(eventV['OverMaxValue']),eventV['MaxMean'],eventV['MaxValue'],eventV['FilePath']))
            '''
            if len(eventV['OverMinValue'])>0:
                print('\tOver Min Value')
                for m in eventV['OverMinValue']:
                    print('\t{0}'.format(m))
            if len(eventV['OverMaxValue'])>0:
                print('\tOver Max Value')
                for m in eventV['OverMaxValue']:
                    print('\t{0}'.format(m))
            '''
    
    for key,value in countList.items():
        for eventV in value:
            #print('{0}\t{1}\t{2}\t{3}\t{4}\t{5}\t{6}\t{7}\t{8}\t{9}'.format(key,eventV['Event_Id'],eventV['TotalCount'],len(eventV['OverMinValue']),eventV['MinMean'],eventV['MinValue'],len(eventV['OverMaxValue']),eventV['MaxMean'],eventV['MaxValue'],eventV['FilePath']))
            print('{0}\t{1}\t{2}'.format(key,eventV['Event_Id'],eventV['FilePath']))
            if len(eventV['OverMinValue'])>0:
                print('\tOver Min Value')
                for m in eventV['OverMinValue']:
                    print('\t{0}'.format(m))
            if len(eventV['OverMaxValue'])>0:
                print('\tOver Max Value')
                for m in eventV['OverMaxValue']:
                    print('\t{0}'.format(m))
            
def ShowAccuracyRate(bandGroup,root,fl,predictFilePre,fo,orderCase='iteration'):
    saveToFile=fo is not None
    print(bandGroup)
    if saveToFile:
        fo.write(bandGroup+'\n')
    accuRatePath=joinPath(root,fl)
    accuRateList=getRawDataFromFile(accuRatePath)
    
    maxAccuRateMeta=accuRateList[0].get_metaPath()        
    if orderCase=='iteration':
        #accuRateList.sort(key=lambda aR:aR.metaPath, reverse=False)
        for ar in accuRateList:
            curMetaPath=ar.get_metaPath()
            metaPathSplit=curMetaPath.split('-')
            numIter=metaPathSplit[len(metaPathSplit)-1].replace('.meta','')
            ar.Iteration=int(numIter)
            predictFilePath=joinPath(root,predictFilePre+'_'+str(numIter)+'_case1.pkl')
            if os.path.exists(predictFilePath):
                ar.CohenKappa,_=CohenValue_Case1(predictFilePath)
                if curMetaPath==maxAccuRateMeta:
                    print('Max Accuracy\tCohen Kappa\t Meta Index')
                    metaSplit=os.path.splitext(curMetaPath)[0].split('-')
                    print('{0}\t{1}\t{2}'.format(ar.get_accRate(),ar.CohenKappa,metaSplit[len(metaSplit)-1]))
                    if saveToFile:
                        fo.write('Max Accuracy\tCohen Kappa\t Meta Index\n')
                        fo.write('{0}\t{1}\t{2}\n'.format(ar.get_accRate(),ar.CohenKappa,metaSplit[len(metaSplit)-1]))                    
        accuRateList.sort(key=lambda aR:aR.Iteration, reverse=False)   
             
    elif orderCase=='metaPath':
        accuRateList.sort(key=lambda aR:aR.metaPath, reverse=False)
    
    index=0
    print('-------------Info----------------')
    print('Index \t Evaluation Accuracy \t Cohen Kappa \t Meta Path')
    if saveToFile:
        fo.write('-------------Info----------------\n')
        fo.write('Index \t Evaluation Accuracy \t Cohen Kappa \t Meta Path \n')
    for ar in accuRateList:
        info='{0}\t{1}\t{2}\t{3}'.format(index,ar.get_accRate(),ar.CohenKappa,ar.get_metaPath())
        print(info)
        if saveToFile:
            fo.write(info+'\n')
        index=index+1
    accuRateList.sort(key=lambda aR:aR.metaPath, reverse=True)
    accuRateList.sort(key=lambda aR:aR.accRate, reverse=True)
    saveRawDataToFile(accuRatePath,accuRateList)
    
def CohenValue_Case1(predictCase1Path):
    from sklearn.metrics import cohen_kappa_score
    preList=getRawDataFromFile(predictCase1Path)
    X=[]
    Y=[]
    for key,value in preList.items():
        if key=='AccuracyRate' or key=='meta' or key=='ckpt':
            continue
        tempX=int(key.split('_')[0])
        X.append(tempX)
        tempY=tempX
        tempMax=value[tempX]
        for lab,countNum in value.items():
            if tempMax<countNum and lab!=tempY:
                tempY=lab
                tempMax=countNum
        Y.append(tempY)
    ckValue=cohen_kappa_score(X,Y)
    return ckValue,preList
