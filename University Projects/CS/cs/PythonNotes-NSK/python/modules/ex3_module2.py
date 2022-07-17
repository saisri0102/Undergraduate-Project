# filename : ex3_module2.py

# different ways of import
# 1.
print()
import module2
print(module2, type(module2))
print("PI  ", module2.PI)
print()

# 2. the user can create shorter and/or meaningful name

import module2 as m2
print(m2, type(m2))
print("PI  ", m2.PI)
print()


# 3. selective import of symbols

from module2 import PI, area_rect
# module2 is no more a Pythonic entity
#print(module2, type(module2))

# can access the members without qualifying
# cannot access those which are not imported
#print("area : ", module2.area_rect(20, 10)) # error
print("area : ", area_rect(20, 10))
print()

#print("area : ", module2.area_circle(7)) # error
#print("area : ", area_circle(7)) # error


# ? what if an imported function calls the other not imported function
# ? what if there is a function with the same name defined
#		before import
#		or after import





# 4. import all
from module2 import *
#print(module2, type(module2)) # error
print("area : ", area_rect(20, 10))





