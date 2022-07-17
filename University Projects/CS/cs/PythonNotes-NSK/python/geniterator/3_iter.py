# filename : 3_iter.py

# mechanims to walk through a collection or a container : iterator
# We have seen many iterable objects:
#	list tuple str keys_of_dict set file
# We can use for loop on these objects
# User defined objects can also support iteration provided
#	they support two functions iter and next

class MyContainer:
	def __init__(self, mylist):
		self.mylist = mylist

	def __iter__(self):
		self.i = 0
		return self

	def __next__(self):
		self.i += 1
		if self.i <= len(self.mylist):
			return self.mylist[self.i - 1]
		else:
			raise StopIteration
"""
a = [ 'apple', 'banana', 'carrot', 'date', 'eff', 'fish' ]
c = MyContainer(a)
for w in c :
	print(w)
"""

a = [ 'apple', 'banana', 'carrot', 'date', 'eff', 'fish' ]
c = MyContainer(a)
it1 = iter(c)
it2 = iter(c)
print(next(it1)) # apple
print(next(it2)) # expect apple, we will get banana





	
