# file name: 2_exception_intro.py

# exception:
#	not common
#	may be an error
#	improves readability
#	improves maintainability

# There are lots of builtin exceptions in Python.
# Users can also create their own exceptions.
# on an exception, the program is terminated with some message.
# Programmatically we can handle the exception and allow for the execution
#	of the program to continue gracefully.

# we use the following keywords : 
# try
#	we expect something unusual could happen in this suite.
#	control will be transferred out of this suite.
# except
#	try should have at least one except block
#	each except can take care of different types of exceptions
# finally
#	this block will be executed after try or try-except blocks are executed
# raise
#	throw an exception

# 

# example 1
# print("res : ", 10 / 0)# ZeroDivisionError: division by zero

# example 2
# print(myvar)# NameError: name 'myvar' is not defined
# example 3
# open("unknown.txt") #FileNotFoundError: [Errno 2] No such file or directory: 'unknown.txt'








