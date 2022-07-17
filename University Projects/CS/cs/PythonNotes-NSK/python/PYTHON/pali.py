'''a=input('enter a word :')
b=a[::-1]
if a==b:
      print('pali')
else:
      print('not pali')

def g(x,y):
      return x+y
g(2,3)
print(g(4,5))

def f1(a,b,*arg,**kwarg):
   print(a,b)
   print(arg,type(arg))
   print(kwarg,type(kwarg))
   
f1(2,3,4,55,6,"abx",4,(2,4),red='r',x=21,boy='d')


def f2():
    global x
    print(x)
    x=x+1
    print(x)
x=12
print(x)
f2()
print (x)

def f(*arg,a,b):
    print(a,b,arg)
    
f(1,2,3,a=5,b=4)'''


'''j=int(input('enter a 3 digit number: '))
b=str(j)
c=len(b)
d=j%10
e=j//10
f=e%10
g=j//100
print('reverse: ',d,f,g)'''

'''l=[-1,3,2,-5,-9,4]
def f(x):
  if x<0:
    return x
m=filter(f,l)
print(list(m))'''

'''l=[1,2,3]
m=[4,5,6]def f(l,m):
  x=0
  l2=[]
  while x<len(l):
   l2.append(l[x]+m[x])
   x=x+1
  print(l2)
f(l,m)'''

'''def f(x):
   if x==0:
      return 1
   else:
      return (x*f(x-1))
print(f(4))'''
   
'''def g(x):
   if x=="":
       return ""
   else:
      return '1'+g(x[1::])
print(g('boy'))'''


'''n=int(input('a number : '))
i=1
n1=0
n2=1
while i<=n:
   n3=n1+n2
   n1=n2
   n2=n3
   i+=1
print(n3)'''

'''def f(n):
   if n==1:
      return 1
   if n==2:
      return 1
   return (f(n-1)+f(n-2))
print(f(5))'''

'''def f(n):
   l=[1,1]
   i=2
   while (True):
       l.append(l[i-1]+l[i-2])
       i+=1
       if l[-1]>=n:
           break
   return l
print(f(5))'''

import math
class circle:
    def __init__(self,radius=1):
        self.radius=radius
    def area(self):
        return self.radius*self.radius*math.pi
    def setr(self,radius):
        self.radius=radius
#c=circle(3)
print(circle(3).area())


   



   

