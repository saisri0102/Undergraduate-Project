import time
import random
c=random.randint(20,50)
print(c)
d=['aus','sl','ind','pak']
f=len(d)
l=f-1
e=random.randint(0,l)
g=d[e]
print(g)
h=0
i=0
m=[]
k=10
while h<12 and i<=c and k>=0:
    a=random.randint(0,7)
    b=random.randint(0,6)
    time.sleep(1)
    if a==1 or a==2:
        if a==1:
            print('wide')
            i=i+1
            print('score : ',i)
            print('balls : ',h)
        elif a==2:
            print('no ball')
            i=i+1
            print('score :',i)
            print('balls: ',h)
    else:
            if b!=5:
                i=i+b
                m.append(i)
                print(m)
                if h==6 or h<6:
                    if i==c:
                        print('u win')
            else:
                print('out')
                k=k-1
            h=h+1
            print('balls :',h)
if h==12 or k==0:
  if m[-1]>=c:
     print('you win')
  else:
     print('you lose')
                
            
