from loadData import load_raw_data
import os
import sys
sys.path.append('..')
import yaml
import numpy as np
from bandList import getEpochPara,createBandGroupMode
from createImg import createImg

def create_Img(isTest):
    allData = load_raw_data(subjects, yml, isTest)
    timeSteps = yml['Img']['timeSteps']
    winSizes = yml['Img']['winSizes']
    l = min(len(timeSteps), len(winSizes))
    for data in allData:
        bgms = createBandGroupMode(data['Type'])
        for i in range(l):
            epochParas = getEpochPara(timeStep=timeSteps[i], windowSize=winSizes[i])
            for bgm in bgms:
                createImg(epochParas, data['Raw'], data['Event'], bgm, yml,isTest=isTest)

if __name__ == '__main__':
    print(sys.argv[1])
    yml = yaml.load(open(sys.argv[1]),Loader=yaml.FullLoader)
    subjects=range(1, int(yml['Meta']['subsample']) + 1)
    create_Img(False)
    create_Img(True)