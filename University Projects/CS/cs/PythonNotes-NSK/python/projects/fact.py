
'''print('\n')
n=int(input('enter a number : '))
def f(n):
   if n==0:
      res=1
   else:
      res=n*f(n-1)
   return res
print('factorial of ',n,'is : ',f(n))

print('\n')
a=int(input('enter a no : '))
b=a**3
def g(a):
   if a==(b+2):
      res=a
   elif a<10:
      res=a*g(a+1)
   else:
      res=1
   return res
print('product is : ',g(a))


print('\n')
c=int(input('enter first no : '))
d=int(input('enter second no : '))
def h(c,d):
   if c==d and c!=0 and d!=0:
      res=c
   elif c>d and c!=0 and d!=0:
      res=h(c-d,d)
   elif c<d and c!=0 and d!=0:
      res=h(c,d-c)
   elif c==0 or d==0:
      res='invalid'
   return res
print('gcd of',c,'and',d,'is : ',h(c,d))

print('\n')
j=input('enter a word or a sentence : ')
k=str(j)
def i(k):
   if k=="":
      res=""
   else:
      res=k[-1]+i(k[:(len(k)-1)])
   return res
print('reverse of',k,'is :',i(k))

a=(1,2,3,4,'a','ab',[1,2])
print(a)
s=""
for i in a:
   s=s+str(i)
print(s)

def f1(x):
   def f(a):
      nonlocal x
      a+=4
      print(a,x)
   x+=9
   print(x)
   return f
print(f1(8)(5))

def f(a,b,c):
    print(type(a),b,sum(c))
l1=[1,2,3]
l2=[4,5,6]
l3=l1+l2
print(l3)
print(f(l1,l2,l3))'''
   
print('\n')
f=input('enter the fruits : ').split()
l=list(f)
p=input('enter the weight : ').split()
m=list(p)
s=""
k=[]
n=[]
for i in range(len(l)):
   n=[]
   n.append(l[i])
   n.append(m[i])
   k.append(n)
k.sort()
print()
for j in range(len(k)):
   s=""
   s=s+str(j+1)+'. '+str(k[j][0])+','+str(k[j][1])
   print(s)
   
'''def f(a,b,c):
    if a==0 or b==0 or c==0:
       return True
    else:
       return False
print(f(1,7,0))
print(f(1,3,4))'''
   
   