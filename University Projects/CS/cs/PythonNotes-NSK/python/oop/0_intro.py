# filename : 0_intro.py

# type
#	set of values
#	set of operators or functions
# there are a few user defined types
# cannot support all possible types we can think
# a language should provide a mechanism to make our own type
# that is called a class

#"""
class Ex0:
	pass
print(Ex0, type(Ex0))
#"""

"""
# a class can have functions(behaviour)
class Ex1:
	def foo():
		print("foo of Ex")
Ex1.foo()

"""
"""
# a class can have attributes(fields or variables)
class Ex2:
	a = "test"
print(Ex2.a)
"""
"""
# we can create variables of Ex3 type : that is called an instance or an object
class Ex3:
	pass
a = Ex3()
print(a, type(a))
"""

"""
# When an object is created, a special function of the class is called for initializing.
# That is called a constructor. The name of the constructor in Python is __init__


# gives an error
class Ex4:
	def __init__():
		print("constructor called")
a = Ex4()
"""

"""
# a = Ex4() becomes Ex4.__init__(a)
# The instance is passed as the first argument to the ctor.
# Even though the argument is implicit, in Python, we require an explicit parameter.
# This can be given any name - is normally called self.
class Ex4:
	def __init__(self):
		print("constructor called")
		print('self : ', self)
a = Ex4()
print('a : ', a)
"""

"""
# an object can have attributes. These are normally added and initialized in the constructor.

class Rect:
	def __init__(self, l, b):
		self.length = l
		self.breadth = b
		# print(length) # error
		# all names should be fully qualified
		print("__init__", self.length, self.breadth)

# initialize a Rect object r1 with length 20 and breadth 10
r1 = Rect(20, 10)
print(r1.length, r1.breadth)
"""

"""
# we can create any number of objects - we have to invoke the constructor to initialize them.
# Integers support functions like __add__.
# Strings support functions like upper.
# There are called behaviours of that particular type
# Our class can also have behaviour through functions in the class.

# Rect.area
# An object of rectangle contains length and breadth.
# Given the rectangle, we can extract the length and the breadth to find the area.
# So, the function area is invoked with an object and does not require any other parameter.



class Rect:
	def __init__(self, l, b):
		self.length = l
		self.breadth = b
	def area(self):
		return self.length * self.breadth

# initialize a Rect object r1 with length 20 and breadth 10
r1 = Rect(20, 10)
r2 = Rect(40, 30)
print('area of r1 : ', r1.area()) # Rect.area(r1)
print('area of r2 : ', r2.area()) # Rect.area(r2)

"""

# let us look at a few more behaviours
# - change length : requires the new length apart from the object
# - we require one explicit argument and two explicit parameters - the first
# parameter always refers to the object through which the call is made.

# Rect.change_length, Rect.change_breadth
class Rect:
	def __init__(self, l, b):
		self.length = l
		self.breadth = b
	def area(self):
		return self.length * self.breadth
	def change_length(self, l):
		self.length = l
	def change_breadth(self, b):
		self.breadth = b

	def disp(self):
		print('length : ', self.length)
		print('breadth : ', self.breadth)

r1 = Rect(20, 10)
print("before change length ")
r1.disp()
r1.change_length(40)
print("after change length ")
r1.disp()

print("before change breadth ")
r1.disp()
r1.change_breadth(30)
print("after change breadth ")
r1.disp()






