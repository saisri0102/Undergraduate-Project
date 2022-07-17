a=[1,2,3]
b=[4,5,6]
res=[]
'''
for i in zip(a,b):
      c.append(sum(i))
print(c)

d=list(map(lambda x,y:x+y,a,b))
print(d)

print(list(map(int.__add__,a,b)))
'''
'''
def mymap(fn,*x):
     for z in zip(*x):
         res.append(fn(*z))
     return res
print(list(mymap(int.__add__,a,b))
'''
'''
def f():
   print('a')
   yield 3
   print('b')
   yield 4
g=f()
print(next(g))
print(next(g))
'''

def gp(a,b):
  t=a[i]
  while True:
    for i in range(len(a)):
     yield t
     t=t[i]+b[i]
s1=gp([1,2,3],[4,5,6])
for i in range(len(a)):
   print(next(s1))
