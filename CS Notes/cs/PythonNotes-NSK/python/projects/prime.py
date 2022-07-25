n=int(input('a number : '))
s=set(range(2,n+1))
while s:
    small=min(s)
    print('prime number : ',small)
    s=s-set(range(small,n+1,small))
    
'''c={'virat':56,'dhoni':100}
print(c)
a=0
g={}
for i in c:
   a=a+int(c[i])
#print(a)
d=c.keys()
#print(d)
b=a/2
#print(b)
for j in c:
    f=int(c[j])+b
    h=int(f)
   # print(f)
    g[h]=j
print(g)'''


'''def gcd(a,b):
   if a==b:
       res = a
   elif a>b:
       res = gcd(a-b,b)
   elif b>a:
       res = gcd(a,b-a)
   return res
print('gcd : ',gcd(5,6))'''



'''class mydate:
    datecount=0
    def __init__(self,d,m,y):
         self.d=d
         self.m=m
         self.y=y
         mydate.datecount+=1
    def __str__(self):
         return str(self.d)+'-'+str(self.m)+'-'+str(self.y)
    #def __del__(self):
        # mydate.datecount-=1
    def disp():
         print('disp : count : ',mydate.datecount)
a=mydate(12,12,2017)
print(a)'''


   
'''class mydate:
    def __init__(self,d,m,y):
         self.d=d
         self.m=m
         self.y=y
    def get(self):
        #return self.d
         return self.m
    def set(self,m):
         #self.d=d
         self.m=m
    dd=property(get,set)
d1=mydate(11,11,11)
print(d1.dd)
d1.dd=1
print(d1.dd)'''
   

   
