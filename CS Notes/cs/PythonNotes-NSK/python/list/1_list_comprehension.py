# file name: 1_list_comprehension.py

# list comprehension
#	uses the set builder method to create a list
# [ <expr> for <variable> in <iterable> ]

l1 = [ 'hello' for x in range(5)]
print(l1) # [ 'hello', 'hello', 'hello', 'hello', 'hello' ] 
# expr may depend on the variable

# squares of numbers from 1 to 5
l2 = [ x * x for x in range(5)]
print(l2)

# list of tuples having a number and its square 
l3 = [ (x, x * x) for x in range(5)]
print(l3)

# list of strings and its length
l4 = [ (x, len(x)) for x in ['bangalore', 'mysore', 'hubballi', 'shivamogga']]
print(l4)

# cartesian product
l5 = [ (x, y) for x in range(4) for y in range(4)]
print(l5)
# relation: partial order
l6 = [ (x, y) for x in range(4) for y in range(4) if x < y]
print(l6)

# convert all words to uppercase
# map
a = ['bangalore', 'mysore', 'hubballi', 'shivamogga' ]
b = [ x.upper() for x in a ]
print(b)
# filter
# find all words whose len exceeds 7
b = [ x for x in a if len(x) > 7]
print(b)

# convert all words to uppercase if len exceeds 7
# combine
b = [ x.upper() for x in a if len(x) > 7]
print(b)










