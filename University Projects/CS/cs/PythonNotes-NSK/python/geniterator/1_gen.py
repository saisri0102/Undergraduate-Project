# filename : 1_gen.py

# generator:
#	acts like an iterator
#	is lazy
#	gives the next value when asked for
#	returns an exception STOP ITERATION when no more values can be made available

# A generator function has a special function called yield
#	which returns a value and control temporarily.


def mygen():
	print("one")
	yield 10
	print("two")
	yield 20
	print("three")
	yield 30
	print("four")

print("--------")
f = mygen() # creates a generator object; no output appears
# from this point, the generator object and the current code are in states of execution
# At a given point in time, only one of them will be executing.
# They exchange control by next and yield.
print("--------")

# next causes execution of the generator code from wherever it was
res = next(f) # prints one; yield causes return of the value as well the control
print(res) # 10; 
res = next(f)
print(res) # 20; 
res = next(f)
print(res) # 30; 
#res = next(f)
print(res) # Error


# Generators are iterable
for res in mygen():
	print(res)

# for statement causes creation of generator object
# calls next each time on the generator object
# handles the stop iteration exception gracefully






