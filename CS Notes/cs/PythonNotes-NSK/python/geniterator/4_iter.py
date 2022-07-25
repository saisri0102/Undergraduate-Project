# filename: 4_iter.py

class MyIterator:
	def __init__(self, c):
		self.c = c
		self.i = 0
	def __next__(self):
		self.i += 1
		if self.i <= len(self.c.mylist):
			return self.c.mylist[self.i - 1]
		else:
			raise StopIteration

class MyContainer:
	def __init__(self, mylist):
		self.mylist = mylist

	def __iter__(self):
		return MyIterator(self)

	

a = [ 'apple', 'banana', 'carrot', 'date', 'eff', 'fish' ]
c = MyContainer(a)
for w in c :
	print(w)


a = [ 'apple', 'banana', 'carrot', 'date', 'eff', 'fish' ]
c = MyContainer(a)
it1 = iter(c)
it2 = iter(c)
print(next(it1)) # apple
print(next(it2)) # we will get banana as expected




