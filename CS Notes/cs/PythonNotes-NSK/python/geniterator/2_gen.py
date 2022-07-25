# filename : 2_gen.py

# generator:
#	to generate prime numbers:

def is_prime(m):
	i = 2
	while m % i != 0 :
		i += 1 
	return i == m

def gen():
	yield 2
	yield 3
	m = 5
	while True:
		if is_prime(m) :
			yield m
		m += 2


g = gen()
# get next n primes
n = 25
for i in range(n):
	print(next(g))

