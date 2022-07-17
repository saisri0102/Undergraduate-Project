import os
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'
from SaveFile import saveRawDataToFile  
from CommonFum import getRawDataFromFile,joinPath
import preLog
import plumLog
import tensorflow as tf
import numpy as np
from dataset import read_image
import gc
from preLog import updateBestPredict
from CommonFum import moveFile

def predict(cf,modelIndex,testPath,metaPath,ckptPath,predictPath,img_width,img_height,classNum,trainDic,runLog):
    num_channels=3         
    gcPerNum=int(cf.get('S3','GcPerNum'))
    
    with tf.Session() as sess:
        ## Let us restore the saved model     
        # Step-1: Recreate the network graph. At this step only graph is created.
        saver = tf.train.import_meta_graph(metaPath)
        # Step-2: Now let's load the weights saved using the restore method.
        saver.restore(sess, ckptPath)
    
        # Accessing the default graph which we have restored
        graph = tf.get_default_graph()
    
        # Now, let's get hold of the op that we can be processed to get the output.
        # In the original network y_pred is the tensor that is the prediction of the network
        y_pred = graph.get_tensor_by_name("y_pred:0")
    
        ## Let's feed the images to the input placeholders
        x= graph.get_tensor_by_name("x:0") 
        y_true = graph.get_tensor_by_name("y_true:0") 
        y_test_images = np.zeros((1, classNum)) 
        
        preLogs=[]
        defCaseCorrectNum,defTotNum=0,0        
        case1PreDic={}
        case2PreDic={}
        havePreFile=[]
        for root,_,files in os.walk(os.path.abspath(testPath)):             
            for fl in files:
                if fl.endswith('jpg') and fl not in havePreFile:
                    flSplit=os.path.splitext(fl)[0].split('_')
                    #Case Default
                    defTotNum+=1
                    #Case 1
                    preKey=flSplit[1]+'_'+flSplit[2]
                    if(preKey not in case1PreDic.keys()):
                        case1PreValue={}                        
                        for key,_ in trainDic.items():
                            case1PreValue.setdefault(key,0)                            
                        case1PreDic.setdefault(preKey,case1PreValue)  
                    if(preKey not in case2PreDic.keys()):
                        case2PreDic.setdefault(preKey,[])                          
                    
                    currectAction=int(flSplit[1])                    
                    absFP=joinPath(root, fl) 
                    images=read_image(absFP,img_width,img_height)
                    x_batch = images.reshape(1, img_height,img_width,num_channels)
                    ### Creating the feed_dict that is required to be fed to calculate y_pred 
                    feed_dict_testing = {x: x_batch, y_true: y_test_images}
                    result=sess.run(y_pred, feed_dict=feed_dict_testing)
                    # result is of this format [probabiliy_of_rose probability_of_sunflower]
                    predictValue=result.argmax()
                    predictValue=list(trainDic.keys())[predictValue]
                    checkValue=(1 if predictValue==currectAction else 0)
                    #case Default
                    defCaseCorrectNum+=checkValue
                    #Case 1 
                    case1PreDic[preKey][predictValue]=case1PreDic[preKey][predictValue]+1
                    #case Default
                    pl=preLog.preLog(absFP,checkValue,metaPath,ckptPath,currectAction,predictValue,result)
                    preLogs.append(pl)                    
                    runLog.info('{0}\tActual:{1},Predict:{2},File:{3}.'.format(('correct' if checkValue==1 else 'wrong'),trainDic[currectAction].ActionName,trainDic[predictValue].ActionName,absFP))
                    #Case 2
                    case2PreDic[preKey].append(result)
                    
                    havePreFile.append(fl)
                    del images
                    if defTotNum%gcPerNum==0:
                        gc.collect()
        #Case 1
        case1AccuRate=CountPredict_Case1(case1PreDic) 
        case1PreDic.setdefault('meta',metaPath)
        case1PreDic.setdefault('ckpt',ckptPath)              
        case1PreDicFilePath=cf.get('S3','predictFileName')+'_'+modelIndex+'_case1'+'.pkl'
        saveRawDataToFile(joinPath(predictPath,case1PreDicFilePath),case1PreDic)            
        #Case Default
        defAccuRate=defCaseCorrectNum/defTotNum
        defPreFileName=cf.get('S3','predictFileName')+'_'+modelIndex+'.pkl'
        saveRawDataToFile(joinPath(predictPath,defPreFileName),preLogs)
        #Case 2
        case2AccuRate=CountPredict_Case2(case2PreDic,trainDic)
        case2PreDic.setdefault('meta',metaPath)
        case2PreDic.setdefault('ckpt',ckptPath)        
        case2PreDicFilePath=cf.get('S3','predictFileName')+'_'+modelIndex+'_case2'+'.pkl'
        saveRawDataToFile(joinPath(predictPath,case2PreDicFilePath),case2PreDic)  
                
        runLog.info('Default Accuracy: {0:.2%},Case 1 Accuracy: {1:.2%},Case 2 Accuracy: {2:.2%}'.format(defAccuRate,case1AccuRate,case2AccuRate))
        del saver
        del preLogs
    del sess    
    gc.collect()
    delTrainModel=False
    if cf.has_option('S3', 'delTrainModel'):
        delTrainModel=cf.get('S3', 'delTrainModel')=='1'
    moveTrainModel=False
    if cf.has_option('S3', 'moveTrainModel'):
        moveTrainModel=cf.get('S3', 'moveTrainModel')=='1'
    if delTrainModel or moveTrainModel:
        defValRate=float(cf.get('S3','defValRate'))/100
        case1ValRate=float(cf.get('S3','case1ValRate'))/100
        case2ValRate=float(cf.get('S3','case2ValRate'))/100
        andSave=cf.get('S3', 'andSave')=='1'
        doChange=False
        if andSave:
            doChange= defValRate>defAccuRate and case1ValRate>case1AccuRate and case2ValRate>case2AccuRate
        else:
            doChange=defValRate>defAccuRate or case1ValRate>case1AccuRate or case2ValRate>case2AccuRate
        if doChange:
            if delTrainModel:
                os.remove(metaPath)
                os.remove(ckptPath)
                dataPath=metaPath.replace('meta','data-00000-of-00001')
                os.remove(dataPath)        
            else:
                indexPath=metaPath.replace('meta','index')
                moveFile(indexPath, 'BadResult', 'GoodResult')
                dataPath=metaPath.replace('meta','data-00000-of-00001')        
                moveFile(dataPath, 'BadResult', 'GoodResult')
                moveFile(metaPath, 'BadResult', 'GoodResult')             
    return [defAccuRate,case1AccuRate,case2AccuRate]
 
def getBestTrainModel(cf,trainPath,testPath,band_folder,resultFile,img_width,img_height,getExistPredict,getExistAccuRate,trainFolderAppend,trainDic,preClassNum=None,onlyTrainGoodModel=False):
    try:        
        test_path=joinPath(testPath,band_folder,'images')
        meta_folder=joinPath(trainPath,band_folder,'trainResult'+trainFolderAppend,'GoodResult')
        predictPath=joinPath(testPath,band_folder,'predictResult'+trainFolderAppend)
        defAccRateFilePath=joinPath(predictPath,'accuRateList_0.pkl') 
        case1AccRateFilePath=joinPath(predictPath,'accuRateList_1.pkl')
        case2AccRateFilePath=joinPath(predictPath,'accuRateList_2.pkl')
        predictFileName=cf.get('S3','predictFileName') 
        global runLog
        runLog = plumLog.createLog(predictPath,'predictRun')        
        if getExistAccuRate and os.path.exists(defAccRateFilePath) and os.path.exists(case1AccRateFilePath) and os.path.exists(case2AccRateFilePath):
            defAccuRateList=getRawDataFromFile(defAccRateFilePath)
            defBestTrainModel=defAccuRateList[0]
            case1AccuRateList=getRawDataFromFile(case1AccRateFilePath)
            case1BestTrainMode=case1AccuRateList[0]
            case2AccuRateList=getRawDataFromFile(case1AccRateFilePath)
            case2BestTrainMode=case2AccuRateList[0]
            bestPreDic={'_0':defBestTrainModel,'_1':case1BestTrainMode,'_2':case2BestTrainMode}
            return bestPreDic
        else:
            defAccuRateList=[]
            case1AccuRateList=[]
            case2AccuRateList=[]
            defExistIndex=[]
            case1ExistIndex=[] 
            case2ExistIndex=[] 
            existIndex=[]          
            if(getExistPredict):
                for root, _, files in os.walk(predictPath):
                    for fl in files:
                        if(fl.endswith('pkl') and fl.startswith(predictFileName)):
                            indexNum=os.path.splitext(fl)[0].split('_')[1]                             
                            file_path=joinPath(root,fl)       
                            if fl.find('_case1')>0:                                
                                case1PreResult=getRawDataFromFile(file_path)
                                pResult=preLog.PreResultLog(band_folder,case1PreResult['AccuracyRate'],case1PreResult['meta'],case1PreResult['ckpt'])
                                case1AccuRateList.append(pResult)
                                case1ExistIndex.append(indexNum)
                            elif fl.find('_case2')>0:
                                case2PreResult=getRawDataFromFile(file_path)
                                pResult=preLog.PreResultLog(band_folder,case2PreResult['AccuracyRate'],case2PreResult['meta'],case2PreResult['ckpt'])
                                case2AccuRateList.append(pResult)
                                case2ExistIndex.append(indexNum)
                            else:
                                preResult=getRawDataFromFile(file_path)
                                correctNum=0  
                                for pR in preResult:
                                    correctNum+=pR.checkValue                                                     
                                accuRate=correctNum/len(preResult)  
                                pResult=preLog.PreResultLog(band_folder,accuRate,preResult[0].metaPath,preResult[0].ckptPath)
                                defAccuRateList.append(pResult)
                                defExistIndex.append(indexNum)
                for i in defExistIndex:
                    if (indexNum in case1ExistIndex) and (indexNum in case2ExistIndex):
                        existIndex.append(i)            
            if(preClassNum==None):
                classNum=len(trainDic)
            else:
                classNum=preClassNum
            
            existIndexLen=len(existIndex)
            for root, _, files in os.walk(os.path.abspath(meta_folder)):
                for fl in files:
                    if(fl.endswith('meta')):  
                        try:                  
                            indexNum=os.path.splitext(fl)[0].split('-')[1]#re.findall(resultFile+"-(.+?).meta",str)
                            if(existIndexLen>0 and indexNum in existIndex):
                                continue
                            existIndex.append(indexNum)
                            metaPath=joinPath(meta_folder,fl)                        
                            ckptPath=joinPath(meta_folder,resultFile+'-'+indexNum)
                            [defAccuRate,case1AccuRate,case2AccuRate]=predict(cf,indexNum,test_path,metaPath,ckptPath,predictPath,img_width,img_height,classNum,trainDic,runLog)                        
                            defAccuRateList.append(preLog.PreResultLog(band_folder,defAccuRate,metaPath,ckptPath))
                            case1AccuRateList.append(preLog.PreResultLog(band_folder,case1AccuRate,metaPath,ckptPath))
                            case2AccuRateList.append(preLog.PreResultLog(band_folder,case2AccuRate,metaPath,ckptPath))
                        except Exception as e:
                            runLog.info(e)
            if not onlyTrainGoodModel:            
                meta_folder=joinPath(trainPath,band_folder,'trainResult'+trainFolderAppend)
                for root, _, files in os.walk(os.path.abspath(meta_folder)):
                    if root.find('BadResult')>0:
                        continue
                    for fl in files:
                        if(fl.endswith('meta')): 
                            try:                   
                                indexNum=os.path.splitext(fl)[0].split('-')[1]#re.findall(resultFile+"-(.+?).meta",str)
                                if(existIndexLen>0 and indexNum in existIndex):
                                    continue
                                existIndex.append(indexNum)
                                metaPath=joinPath(meta_folder,fl)                        
                                ckptPath=joinPath(meta_folder,resultFile+'-'+indexNum)
                                [defAccuRate,case1AccuRate,case2AccuRate]=predict(cf,indexNum,test_path,metaPath,ckptPath,predictPath,img_width,img_height,classNum,trainDic,runLog)                        
                                defAccuRateList.append(preLog.PreResultLog(band_folder,defAccuRate,metaPath,ckptPath))
                                case1AccuRateList.append(preLog.PreResultLog(band_folder,case1AccuRate,metaPath,ckptPath))
                                case2AccuRateList.append(preLog.PreResultLog(band_folder,case2AccuRate,metaPath,ckptPath))
                            except Exception as e:
                                runLog.info(e)
            if len(defAccuRateList)>0:
                defAccuRateList.sort(key=lambda aR:aR.metaPath, reverse=True)
                defAccuRateList.sort(key=lambda aR:aR.accRate, reverse=True)
                defBestTrainModel=defAccuRateList[0]
                accRateFilePath=os.path.join(predictPath,'accuRateList_0.pkl')
                saveRawDataToFile(accRateFilePath,defAccuRateList)
            if len(case1AccuRateList)>0:
                case1AccuRateList.sort(key=lambda aR:aR.metaPath, reverse=True)
                case1AccuRateList.sort(key=lambda aR:aR.accRate, reverse=True)
                case1BestTrainMode=case1AccuRateList[0]
                accRateFilePath=os.path.join(predictPath,'accuRateList_1.pkl')
                saveRawDataToFile(accRateFilePath,case1AccuRateList)
            if len(case2AccuRateList)>0:
                case2AccuRateList.sort(key=lambda aR:aR.metaPath, reverse=True)
                case2AccuRateList.sort(key=lambda aR:aR.accRate, reverse=True)
                case2BestTrainMode=case2AccuRateList[0]
                accRateFilePath=os.path.join(predictPath,'accuRateList_2.pkl')
                saveRawDataToFile(accRateFilePath,case2AccuRateList)
            bestPreDic={'_0':defBestTrainModel,'_1':case1BestTrainMode,'_2':case2BestTrainMode}  
        return bestPreDic                  
    except Exception as e:
        print(e)

def runPredict(cf,trainPath,testPath,band_folder,resultFile,img_width,img_height,getExistPredict,getExistAccuRate,trainFolderAppend,trainDic,classNum=None,onlyTrainGoodModel=False):
    bestPreDic=getBestTrainModel(cf,trainPath,testPath,band_folder,resultFile,img_width,img_height,getExistPredict,getExistAccuRate,trainFolderAppend,trainDic,classNum,onlyTrainGoodModel)
    updateBestPredict(bestPreDic,testPath,band_folder)

def CountPredict_Case1(predictDic):
    correctNum=0
    totalNum=len(predictDic)
    if totalNum==0:
        return 0
    for key,value in predictDic.items():
        if(key!='meta' and key!='ckpt'):
            currentValue=int(key.split('_')[0])
            maxCount=value[currentValue]
            checkValue=1
            for vKey,vCount in value.items():
                if(vKey!=currentValue and maxCount<vCount):
                    checkValue=0
                    break
            correctNum+=checkValue
    accuRate=correctNum/totalNum
    predictDic.setdefault('AccuracyRate',accuRate)
    return accuRate  

def CountPredict_Case2(predictDic,trainDic):
    correctNum=0
    totalNum=len(predictDic)
    if totalNum==0:
        return 0          
    for key,value in predictDic.items():
        if(key!='meta' and key!='ckpt'):
            resultMarix=np.zeros([1,len(trainDic)])
            for r in value:
                resultMarix=resultMarix+r
            currectAction=int(key.split('_')[0])            
            predictValue=resultMarix.argmax()
            predictValue=list(trainDic.keys())[predictValue]
            checkValue=(1 if predictValue==currectAction else 0)
            correctNum+=checkValue
    accuRate=correctNum/totalNum
    predictDic.setdefault('AccuracyRate',accuRate)
    return accuRate        

def CountPredict_Case3And4(case3PreDic,selBandGroupModes,trainDic):
    correctNum=0
    totalNum=len(case3PreDic)
    if totalNum==0:
        return 0 
    if totalNum>0:
        for key,value in case3PreDic.items():
            if(len(value['PreValues'])%len(selBandGroupModes)!=0):
                print('The length of {0} is {1}.'.format(key, len(value['PreValues'])))
            resultMarix=np.zeros([1,len(trainDic)])
            for pv in value['PreValues']:
                resultMarix=resultMarix+pv
            predictValue=resultMarix.argmax()
            predictValue=list(trainDic.keys())[predictValue]
            checkValue=(1 if predictValue==value['Current'] else 0)
            value['PreResult']=predictValue
            correctNum+=checkValue 
    accuRate=correctNum/totalNum
    case3PreDic.setdefault('AccuracyRate',accuRate)
    return accuRate  

def CollectPredict(predict_path,folderAppend,predictFileName,band_folder,cf=None):
    print("Collecting {0}'s accuRateList".format(band_folder))
    predictPath=os.path.join(predict_path,band_folder,'predictResult'+folderAppend)
    defBestTrainModel=None
    case1BestTrainMode=None
    case2BestTrainMode=None
    defAccuRateList=[]
    case1AccuRateList=[]
    case2AccuRateList=[]     
    for root, _, files in os.walk(predictPath):
        for fl in files:
            if fl.startswith(predictFileName) and fl.endswith('pkl'):                
                if fl.find('_case1')>0:
                    file_path=os.path.join(root,fl)
                    predictDic=getRawDataFromFile(file_path)
                    accuRate=predictDic['AccuracyRate']
                    pResult=preLog.PreResultLog(band_folder,accuRate,predictDic['meta'],predictDic['ckpt'])
                    case1AccuRateList.append(pResult)
                elif fl.find('_case2')>0:
                    file_path=os.path.join(root,fl)
                    predictDic=getRawDataFromFile(file_path)
                    accuRate=predictDic['AccuracyRate']
                    pResult=preLog.PreResultLog(band_folder,accuRate,predictDic['meta'],predictDic['ckpt'])
                    case2AccuRateList.append(pResult)
                else:
                    if fl.startswith('accuRateList'):
                        continue                
                    file_path=os.path.join(root,fl)
                    preResult=getRawDataFromFile(file_path)
                    correctNum=0  
                    for pR in preResult:
                        correctNum+=pR.checkValue                                                     
                    accuRate=correctNum/len(preResult)  
                    pResult=preLog.PreResultLog(band_folder,accuRate,preResult[0].metaPath,preResult[0].ckptPath)
                    defAccuRateList.append(pResult)
    if len(defAccuRateList)>0:
        defAccuRateList.sort(key=lambda aR:aR.metaPath, reverse=True)
        defAccuRateList.sort(key=lambda aR:aR.accRate, reverse=True)
        defBestTrainModel=defAccuRateList[0]
        accRateFilePath=os.path.join(predictPath,'accuRateList_0.pkl')
        saveRawDataToFile(accRateFilePath,defAccuRateList)
    if len(case1AccuRateList)>0:
        case1AccuRateList.sort(key=lambda aR:aR.metaPath, reverse=True)
        case1AccuRateList.sort(key=lambda aR:aR.accRate, reverse=True)
        case1BestTrainMode=case1AccuRateList[0]
        accRateFilePath=os.path.join(predictPath,'accuRateList_1.pkl')
        saveRawDataToFile(accRateFilePath,case1AccuRateList)
    if len(case2AccuRateList)>0:
        case2AccuRateList.sort(key=lambda aR:aR.metaPath, reverse=True)
        case2AccuRateList.sort(key=lambda aR:aR.accRate, reverse=True)
        case2BestTrainMode=case2AccuRateList[0]
        accRateFilePath=os.path.join(predictPath,'accuRateList_2.pkl')
        saveRawDataToFile(accRateFilePath,case2AccuRateList)
    bestPreDic={'_0':defBestTrainModel,'_1':case1BestTrainMode,'_2':case2BestTrainMode}
    updateBestPredict(bestPreDic,predict_path,band_folder)