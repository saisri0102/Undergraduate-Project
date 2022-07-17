l=[(123,'a',(90,77,98)),(456,'b',(67,99,96)),(789,'c',(89,99,93))]
a=max(l,key=lambda x:x[2][2])
print(a)
b=100-(a[2][2])
c=list(map(lambda x:x[2][2]+b,l))
print(c)
d=list(sorted(l,key=lambda x:x[2][2],reverse=True))
print(d[0],d[1],d[2])
