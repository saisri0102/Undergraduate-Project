'''n=5
for i in range(n):
  if i==0:
     for j in range(n):
        print(n,end=" ")
     print()
  elif i==1:
     for k in range(n):
        if k==0:
          print(n,end=" ")
        else:
          print((n-1),end=" ")
     print()
  elif i==2:
     for l in range(n):
         if l==0:
             print(n,end=" ")
         elif l==1:
             print((n-1),end=" ")
         else:
             print((n-2),end=" ")
     print()
  elif i==3:
     for m in range(n):
         if m==0:
             print(n,end=" ")
         elif m==1:
             print((n-1),end=" ")
         elif m==2:
             print((n-2),end=" ")
         else:
             print((n-3),end=" ")
     print()'''

'''x=100;y=x;y=200;print(x)
x=[100,200];y=x;y=[300,400];print(x)
#x=100,200];y=x;y.extend([300,400]);print(x)
x=[100,[200]];y=x;y[0]=[300,400];print(x)
x=[100,200];y=x;y+=[300,400];print(x)'''

class A:
     def __iter__(self):
         self.x=0
         return self
     def __next__(self):
         self.x+=11
         return self.x
'''a=A()
x=iter(a)
y=iter(a)
print(next(x))
print(next(y))
print(next(x))'''
