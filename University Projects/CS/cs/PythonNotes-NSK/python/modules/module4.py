# filename: module4.py

def foo():
	print("foo called")
def bar():
	print("bar called")

# will these be called when we 
# a) execute this file directly : python module4.py
# b) import in another file : python client1_module4.py
# YES
# How do we avoid executing this test code on import?
# How to distinguish between direct execution and import
# check the variable:
#	__name__
#		on direct execution :  '__main__'
#		on import : 'module4' #module name
# code for testing
"""
# version 1
foo()
bar()
"""
# remove this statement later
print("__name__: ", __name__)
#version 2
if __name__ == '__main__':
	foo()
	bar()

