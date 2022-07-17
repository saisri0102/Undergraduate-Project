import tkinter as tk
from tkinter import *
from tkinter.filedialog import askopenfile
from PIL import Image
import random
import os,sys
import numpy
import cv2 as cv
import imageio
root= tk.Tk()
canvas1 = tk.Canvas(root, width = 300, height = 300)
canvas1.pack()
label1 = tk.Label(root, text= "choose the image", fg='green', font=('helvetica', 12, 'bold'))
canvas1.create_window(150, 150, window=label1)

file2 = askopenfile(mode ='r', filetypes =[('Python Files', '*.*')])
print(file2.name)
img=Image.open(file2.name)
row,col = img.size

canvas2 = tk.Canvas(root, width = 300, height = 300)
canvas2.pack()
label2 = tk.Label(root, text= "choose the text file", fg='green', font=('helvetica', 12, 'bold'))
canvas2.create_window(150, 150, window=label2)

file1 = askopenfile(mode ='r', filetypes =[('Python Files', '*.*')])
original_array = numpy.loadtxt(file1.name).reshape(col,row,3)
nu=list(original_array)
h=list(original_array)
j=numpy.array(h,dtype= numpy.uint8)
op = numpy.asarray(img)

comparison = j[0][0] == op[0][0]
equal_arrays = comparison.all()
if(equal_arrays):
    print("recieved text and image file are matching")
    
row1 = 1000003
phi = [0 for x1 in range(row1)]
occ = [0 for x1 in range(row1)]
primes = [] 
phi[1] = 1
for i in range(2,1000001):
    if(phi[i] == 0):
        phi[i] = i-1
        primes.append(i)
        #j = 2*i
        for j in range (2*i,1000001,i):
            #print("j ",j)
            #print(j)
            if(occ[j] == 0):
                #print ("inside if2")
                occ[j] = 1
                phi[j] = j
                #print (phi[j])
            phi[j] = (phi[j]*(i-1))//i
            
            
p = 911
q = 101
print(p," ", q)

n = p*q
mod = n

phin1 = phi[n]
print("phin1",phin1)
phin2 = phi[phin1]
print("phin2",phin2)
e = 20201
print("e",e)
mod1 = phin1
dec = [[0 for x in range(row)] for y in range(col)]
def power1(x,y,m):
    ans=1
    while(y>0):
        if(y%2==1):
            ans=(ans*x)%m
        y=y//2
        x=(x*x)%m
    return ans
d = power1(e,phin2-1,mod1)
for i in range(col):
	for j in range(row):
		r,g,b = nu[i][j]
		r1 = power1(r,d,mod)-10
		g1 = power1(g,d,mod)-10
		b1 = power1(b,d,mod)-10
		dec[i][j] = [r1,g1,b1]
img2 = numpy.array(dec,dtype = numpy.uint8)
img3 = Image.fromarray(img2,"RGB")
img3.show()
print("decryption done")
root.mainloop()
