#2) Using map/filter/ reduce, write a code that create a #list of (n)**2 for range(10) for even integers

print(list(map(lambda x:x**2,range(0,10,2))))

#7)Create a list of all odd numbers between 1 and 100 which are divisible by 5
l=list(range(1,100,2))
print(list(filter(lambda x: x%5==0,l)))

#5)Find all the prime numbers between the range using #functional programming
import math
primes = range(2, 20 )
for i in range(2, int( math.ceil(math.sqrt(20)) )): 
    primes = list(filter(lambda x: x == i or x % i, primes))
print(primes)

#6)Create a new list from the given list of elements where in #the new list contains all elements exactly twice.
l=[1,2,3,4,5]
print(list(map(lambda x: x*2,l)))

#4)Find the product of all elements in the tuple using #functional Programming functions.
t=(1, 2, 3, 4)
print(functools.reduce(lambda x,y:x*y,t))

#3)Create a list which contains the difference between the #corresponding elements of two given lists.
l=[1, 2, 3, 4];ll=[11, 22, 33, 44]
print(list(map(lambda x,y:x-y,l,ll)))
#1)WAP to create a list using two given lists which contain #strings in it. New list contains the bigger element by #comparing the corresponding elements of two lists.
l=['hello', 'all']
ll=['hi', 'all']
#l3=['hello', 'all']
l3=list(filter(lambda x:len(x),max(l,ll,key=lambda x:len(x))))
print(max(l3,key=lambda x:len(x)))
#or
l4=max(l3,key=lambda x:len(x))
l4=max(max(l,ll,key=lambda x:len(x)),key=lambda x:len(x))
print(l4)

#9)
l=[1, 2, 3, 100, -11, 45]
import functools
print(functools.reduce(lambda x,y: x if x> y else y,l))
#10)
import string
l=['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']
print(tuple(map(str.upper,filter(lambda x: x not in l,string.ascii_letters))))



