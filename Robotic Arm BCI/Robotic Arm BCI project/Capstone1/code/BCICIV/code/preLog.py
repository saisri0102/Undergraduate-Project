class preLog:        
    def __init__(self,filePath,checkValue,metaPath,ckptPath,currectAction,predictAction,preResult=None):
        self.set_filePath(filePath)
        self.set_checkValue(checkValue)
        self.set_mediaPath(metaPath)
        self.set_ckptPath(ckptPath)
        self.set_currectAction(currectAction)
        self.set_predictAction(predictAction)
        self.set_predictResult(preResult)

    def set_filePath(self,file_path):
        self.filePath=file_path
    def get_filePath(self):
        return self.filePath
    
    def set_checkValue(self,check_value):
        self.checkValue=check_value
    def get_checkValue(self):
        return self.checkValue
    
    def set_ckptPath(self,actual_action):
        self.ckptPath=actual_action
    def get_ckptPath(self):
        return self.ckptPath
    
    def set_mediaPath(self,meta_Path):
        self.metaPath=meta_Path
    def get_mediaPath(self):
        return self.metaPath
    
    def set_currectAction(self,currect_action):
        self.currectAction=currect_action        
    def get_currectAction(self):
        return self.currectAction
    
    def set_predictAction(self,predict_action):
        self.predictAction=predict_action        
    def get_prediction(self):
        return self.predictAction
    
    def set_predictResult(self,predict_result):
        self.predictResult=predict_result        
    def get_predictResult(self):
        return self.predictResult

class PreResultLog:
    def __init__(self,band_Name,acc_Rate,meta_Path,ckpt_Path):
        self.set_bandName(band_Name)
        self.set_accRate(acc_Rate)
        self.set_ckptPath(ckpt_Path)
        self.set_metaPath(meta_Path)
    
    def set_bandName(self,band_Name):
        self.bandName=band_Name
    def get_bandName(self):
        return self.bandName
    
    def set_accRate(self,acc_Rate):
        self.accRate=acc_Rate
    def get_accRate(self):
        return self.accRate
    
    def set_metaPath(self,media_Path):
        self.metaPath=media_Path
    def get_metaPath(self):
        return self.metaPath
    
    def set_ckptPath(self,ckpt_Path):
        self.ckptPath=ckpt_Path
    def get_ckptPath(self):
        return self.ckptPath
    
class preImage:
    def __init__(self,file_path,currect_action,_data):
        self.set_filePath(file_path)
        self.set_currectActioin(currect_action)
        self.set_data(_data)
    
    def set_filePath(self,file_path):
        self.filePath=file_path
    def get_filePath(self):
        return self.filePath
        
    def set_currectActioin(self,currect_action):
        self.currectAction=currect_action
    def get_currectActioin(self):
        return self.currectAction
    
    def set_data(self,_data):
        self.data=_data
    def get_data(self):
        return self.data
    
def updateBestPredict(bestPreDic,subject_path,frequencyBand):
    from SaveFile import getRawDataFromFile,saveRawDataToFile
    from CommonFum import joinPath
    if bestPreDic!=None:
        import os
        for key,value in bestPreDic.items():
            bestFilePath=joinPath(subject_path,'bestMedas'+key+'.pkl')
            if(os.path.exists(bestFilePath)):        
                bestMedas=getRawDataFromFile(bestFilePath)    
                noneMeda=next((bm for bm in bestMedas if bm==None),True)
                while(noneMeda==None):
                    bestMedas.remove(noneMeda)
                    noneMeda=next((bm for bm in bestMedas if bm==None),True)        
                    
                selectBM=next((bm for bm in bestMedas if bm.bandName == frequencyBand),None)
                if(selectBM is not None):
                    bestMedas.remove(selectBM)            
                bestMedas.append(value)
            else:
                bestMedas=[]
                bestMedas.append(value)
            saveRawDataToFile(joinPath(subject_path,'bestMedas'+key+'.pkl'),bestMedas)