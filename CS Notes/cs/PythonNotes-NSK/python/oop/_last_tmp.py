# filename : 1_inher.py

# inheritance
# we have a class called the base class.
# We require another class which exhibits every behaviour of the base class
# and may have other behaviours or the behaviours could be different.
# such a class is called a derived class.
# We create the derived class to use the base class - called inheritance

# point in 2 dimension is a point in 3 dimension
class P2D:
	def __init__(self, x, y):
		self.x = x
		self.y = y
	def disp(self):
		print ("x : ", self.x)
		print ("y : ", self.y)

"""
# P3D inherits from P2D
# an object of P3D gets everything P2D has
class P3D(P2D) :
	def __init__(self, x, y, z):
		P2D.__init__(self, x, y)
		self.z = z

p3 = P3D(11, 12, 13)
p3.disp() # no function in the derived class; calls the base class function by default
print(isinstance(p3, P2D))  #True
"""
# P3D inherits from P2D
# an object of P3D gets everything P2D has
class P3D(P2D) :
	def __init__(self, x, y, z):
		P2D.__init__(self, x, y)
		self.z = z
	#overriding the base class function
	def disp(self):
		P2D.disp(self) # delegate work to the base class
		print("z : ", self.z)
		

p3 = P3D(11, 12, 13)
p3.disp() # no function in the derived class; calls the base class function by default
#print(isinstance(p3, P2D))  #True