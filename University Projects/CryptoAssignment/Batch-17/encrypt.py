from tkinter import *
from tkinter.filedialog import askopenfile
from PIL import Image
import random
import os,sys
import numpy 
top = Tk()  
top.geometry("200x200")  
  
def k():
    file = askopenfile(mode ='r', filetypes =[('Files', '*.*')])
    print(file.name)
    img=Image.open(file.name)
    row,col = img.size
    pixels=img.load()
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
				#print ((i-1)//i)
                                    phi[j] = (phi[j]*(i-1))//i
			#print(phi[j])
			#j = j + i
#print (primes)
    p = primes[random.randrange(1,167)]
    q = primes[random.randrange(1,167)]

    print(p," ", q)
    n = p*q
    mod = n
#print(phi)
    phin1 = phi[n]
    print("phin1",phin1)
    phin2 = phi[phin1]
    print("phin2",phin2)
    e = primes[random.randrange(1,9000)]
    print("e",e)
    mod1 = phin1
    def power1(x,y,m):
            ans=1
            while(y>0):
                    if(y%2==1):
                            ans=(ans*x)%m
                    y=y//2
                    x=(x*x)%m
            return ans
    d = power1(e,phin2-1,mod1)
    enc = [[0 for x in range(row)] for y in range(col)]
    dec = [[0 for x in range(row)] for y in range(col)]
    for i in range(col):
            for j in range(row):
                    r,g,b = pixels[j,i]
                    r1 = power1(r+10,e,mod)
                    g1 = power1(g+10,e,mod)
                    b1 = power1(b+10,e,mod)
                    enc[i][j] = [r1,g1,b1]
    print (pixels[row-1,col-1])
    ik=numpy.array(enc)
    img = numpy.array(enc,dtype= numpy.uint8)
    print(ik.shape)
    print("----------------------------------------------")
    print("img=",img)
    print("----------------------------------------------")
    print("ik",len(ik))
    a_file = open(r"C:\Users\Shreya\Desktop\test1.txt", "w")
    for r in ik:
        numpy.savetxt(a_file, r)

    a_file.close()
    img1 = Image.fromarray(img,"RGB")
    I = numpy.asarray(img1)
    print("----------------------------------------------")
    print("i=",I)
    print("-----------------------------------------------")
    
    img1.show()
    img1.save(r"C:\Users\Shreya\Desktop\enc.jpg")
    print("col",col)
    
    original_array = numpy.loadtxt(r"C:\Users\Saisri\Desktop\test1.txt").reshape(col,row,3)
    #print(original_array)
    print("ENcryption done!!")




    
  
    
        
    
    
      
  
  
  
  
b3 = Button(top, text = "Encrypt",activeforeground = "green",activebackground = "pink",pady = 10,command=k)  
  


  
  
  
b3.pack(side = TOP)  
  
  
  
top.mainloop()  
