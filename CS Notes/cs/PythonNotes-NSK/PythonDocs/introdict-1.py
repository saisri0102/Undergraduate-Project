# set are mutable but elements are immutable
# dictionaries -key value pair
# unordered collections of objects
# cannot access the elements through the position
# access the values through keys
# construct - dict()
# {} - empty dictionary
# keys - immutable object - values, string, tuple 
# tuple - immutable objects
#values - lists, tuple
# methods - len, values, items, keys
s = """here is the string 
which has three lines here string"""
d = {}
for word in s.split():
	if word[0] not in d:
		d[word[0]]= set()
	d[word[0]].add(word)
	 
print(d)
