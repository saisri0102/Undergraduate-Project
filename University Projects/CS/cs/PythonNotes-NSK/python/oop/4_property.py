# filename : 4_property.py

# get and set
class MyDate:
	date_count = 0
	def __init__(self, dd, mm, yy):
		self.dd = dd
		self.mm = mm
		self.yy = yy
	def get_dd(self):
		return self.dd
	def set_dd(self, dd) :
		self.dd = dd
	DD = property(get_dd, set_dd)

d1 = MyDate(11, 11, 11)
print(d1.DD)
d1.DD = 22
print(d1.DD)



