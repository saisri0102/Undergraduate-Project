# file name: 4_exception.py

# user defined exception
class MyException(Exception):
	def __init__(self, str):
		self.str = str
	def __str__(self):
		return self.str

# check whether n is between 1 and 100
n = int(input("enter a number:"))
try:
	if not 1 <= n <= 100 :
		raise MyException("number not in range")
	print("number is fine : ", n)
except MyException as e:
	print(e)
print("thats all")

