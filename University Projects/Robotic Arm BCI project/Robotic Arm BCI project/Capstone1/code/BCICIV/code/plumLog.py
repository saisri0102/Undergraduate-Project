import time
def createLog(save_folder,file_name,initFile=False):
    import logging
    import os
    
    runLog=logging.getLogger() 
    runLog.setLevel(logging.DEBUG)
    
    file_name=file_name+'_'+time.strftime('%Y%m%d%H%M',time.localtime(time.time()))+'.log'
    logPath=os.path.join(save_folder,file_name)  
    if not os.path.exists(save_folder):
        os.makedirs(save_folder) 
    else:        
        if(initFile):
            if(os.path.exists(logPath)):
                f=open(initFile,'wt')
                f.close()
    runLog.handlers.clear()
    
    fh = logging.FileHandler(logPath) 
    fh.setLevel(logging.DEBUG)      
    
    ch = logging.StreamHandler() 
    ch.setLevel(logging.DEBUG)    
    
    #formatter = logging.Formatter('[%(asctime)s][%(thread)d][%(filename)s][line: %(lineno)d][%(levelname)s] ## %(message)s')
    formatter=logging.Formatter('"%(asctime)s - %(message)s"')        
    fh.setFormatter(formatter) 
    ch.setFormatter(formatter)    
    # ��logger���handler 
    runLog.addHandler(fh) 
    runLog.addHandler(ch) 
    
    logPath=os.path.join(save_folder,'SysLog_'+file_name)
    logging.basicConfig(level=logging.DEBUG,
                    format='%(asctime)s %(filename)s[line:%(lineno)d] %(levelname)s %(message)s',
                    datefmt='%a, %d %b %Y %H:%M:%S',
                    filename=logPath,
                    filemode='w')
    return runLog    
             
        
        