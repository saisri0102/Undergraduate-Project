# filename: ex4_module3.py

# ToDo

# check :
#	ls -l 
#	ls -l __pycache__
# observe no module3.pyc file

# run:
# python module3.py
# check :
#	ls -l 
#	ls -l __pycache__
# observe no module3.pyc file

# run this file
# python ex4_module3.py
# check :
#	ls -l 
#	ls -l __pycache__
# observe there is a  module3.pyc file
# 
#	this is a compiled file
#	not created when a program is executed directly
#	created on import
#	

import module3


# add some extra code to ex4_module3.py (this file)
module3.foo()

# run this file
# python ex4_module3.py
# check :
#	ls -l __pycache__
# observe that the time stamp has not changed
# compiled code of module3 is used and module3 is not recompiled


# add an extra line to module3.py
# run this file
# python ex4_module3.py
# check :
#	ls -l __pycache__
# observe that the time stamp has changed
# program is recompiled whenever the .py file has a higher timestamp
#		compared to its corresponding .pyc file
# this concept is called the build concept




