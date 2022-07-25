# -*- coding: UTF-8 -*- #
import cv2
import numpy as np

def read_image(fileName,img_width,img_height):
    image = cv2.imread(fileName)
    if(image.shape[0]!=img_height and image.shape[1]!=img_width):
        image = cv2.resize(image, (img_width, img_height),0,0, cv2.INTER_LINEAR)
        image = image.astype(np.float32)
        image = np.multiply(image, 1.0 / 255.0)
    return image