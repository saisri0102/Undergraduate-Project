# filename: 3_static.py

# count the number of objects
class MyDate:
	date_count = 0
	def __init__(self, dd, mm, yy):
		self.dd = dd
		self.mm = mm
		self.yy = yy
		MyDate.date_count += 1
	def __str__(self):
		return str(self.dd) + "-" + str(self.mm) + "-" + str(self.yy)

	def __del__(self):
		MyDate.date_count -= 1

	# this notation is used to indicate that the function should be changed from an object
	# function to a static function - this does not have any parameter - no self.
	@staticmethod
	def disp_count():
		print("disp_count : count : ", MyDate.date_count)
# count the number of dates
# is a property of the class and not any date object
# such an attribute is called a class attribute
print("count : ", MyDate.date_count)
d1 = MyDate(11, 11, 11)
print("count : ", MyDate.date_count)
d2 = MyDate(12, 12, 12)
print("count : ", MyDate.date_count)
# should decrease when the object is destroyed.
# a special function called destructor will be called - name __del__
# we can take care of resources in this function
del d2
print("count : ", MyDate.date_count)

# we could have a function to display static attributes
# called static function; there do not depend on any object of the class.
# this is a class behaviour and not object behaviour
MyDate.disp_count()


