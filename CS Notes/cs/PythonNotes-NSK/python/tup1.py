a=[1,2,3]
b=[4,5,6]
c=[]
d=()
e=[]
for i in range(len(a)):
   c=[]
   c.append(a[i])
   c.append(b[i])
   d=tuple(c)
   e.append(d)
print(e)