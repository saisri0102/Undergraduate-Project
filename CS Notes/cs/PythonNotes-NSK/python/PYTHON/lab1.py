"""class ex:
	xxx = 111
	def foo():
		print("foo called")
#print(ex.xxx)
#ex.foo()
a = ex()
print(a.xxx)
#a.foo()"""
class ex:
	def __init__(self,name):
		print("ctor called")
		self.name =name
		print(self.name)
	def foo(junk):
		print("junk called")
a = ex('bob')
#a.foo()
ex.foo(a)
#ex.__init__(a)

# class is a type
# class is an blue print and anything created by blue print are objects
"""class ex:
	pass
#ex.t =3
print(ex, type(ex))
print(dir(ex))
print("Another file")"""
class ex:
	def __init__(self,name):
		self.name
ex.t = "bob"
print(ex,type(ex))
print(dir(ex))
print(ex.t)
"""class rect:
	length = 1
	def foo():
		print("foo called")
print(rect.length)
rect.foo()
print(type(rect))
print(type(rect.length))"""

class rect:
	count = 0
	def __init__(self, l, b):
		self.length = l
		self.breadth = b
		rect.count += 1
	def area(self):
		return self.length * self.breadth
	def change_length(self, l):
		self.length = l
	def __del__(self):
		print("dtor called")
		rect.count -= 1

obj = rect(12,13)
print(obj.length)
print(obj.area())
obj.change_length(20)
print(obj.area())
print(rect.count)
obj1 = rect(10,20)
print(rect.count)
del obj
print(rect.count)
		
class a:
	s = 123
	##def foo(self):
	#	print('foo called')
	def __init__(self,a):
		self.l = a
		print(self.l)

t = a(10)
#a.foo(t)
#print(dir(t))
#print(dir(a))

