import pickle

def saveRawDataToFile(file_path,raw_data):
    f = open(file_path,'wb')
    pickle.dump(raw_data,f)
    f.close()

def getRawDataFromFile(file_path):
    f=open(file_path,'rb')
    raw_data=pickle.load(f)
    f.close()
    return raw_data