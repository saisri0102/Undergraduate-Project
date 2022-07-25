class date:
    def __init__(self,d,m,y):
         self.d=d
         self.m=m
         self.y=y
    def __str__(self):
         return (str(self.d)+'-'+str(self.m)+'-'+str(self.y))
    def key(self):
         return (self.y*365+self.m*30+self.d)
d=date(19,3,1999)
class event:
    def __init__(self,d,m,y,detail):
         self.date=date(d,m,y)
         self.detail=detail
    def __str__(self):
         return (str(self.date)+'==>'+self.detail)
    def key(self):
         return self.date.key()

e=event(19,3,1999,'birth year')
print(e)
