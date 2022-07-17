#filename: ex5_MyLib_module5.py

#import module5 # error
#module5.foo()

#import MyLib.module5 # error
#module5.foo()

import sys
print(sys.path)
sys.path.insert(0, '/home/nsk/pes/ICUP/Theory/module/MyLib/')
print(sys.path)
import module5
module5.foo()


