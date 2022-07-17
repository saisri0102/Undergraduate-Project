# file name: 3_exception.py

# catching an exception
"""
m = 10
#n = 2
n = 0
try:
	print("one")
	print("res : ", m / n)
	print("two")
except Exception as e:
	print(e)
"""

# on an exception, the try block is exited
# there is no concept of resume at the end of handling of the exception
# only one exception handler will be executed

m = 10
#n = 2
n = 0
try:
	print("one")
	print("res : ", m / n)
	print("two")
	print(myvar)
	print("three")
except NameError as e:
	print("no such name : ", e)
#except Exception as e:
#	print("all other exceptions : ", e)

except:
	print("all exceptions")



