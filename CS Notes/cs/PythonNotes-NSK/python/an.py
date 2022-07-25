class a:
   def __init__(s,l,b):
         s.l=l
         s.b=b
   def area(s):
         return (s.l*s.b)
   def sets(s,l):
       s.l=l
   def setss(s,b):
       s.b=b
   def gets(s):
       return s.b
b=a(10,20)
print(b.area())
b.sets(3)
print(b.area())
b.setss(8)
print(b.area())
print(b.gets())
