#play with files
import os
#print(os.listdir("."))
print(list(filter(os.path.isfile,os.listdir("."))))