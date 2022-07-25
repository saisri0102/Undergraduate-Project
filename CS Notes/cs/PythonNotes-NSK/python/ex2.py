'''class A:
   def __init__(self):
      print('c base')
   def __del__(self):
      print('d base')
#a=A()
class B(A):
   def __init__(self):
      A.__init__(self)
      print('c derived')
   def __del__(self):
      print('d derived')
      A.__del__(self)
b=B()
'''


class A:
  def foo(self):
     print('foo A')
class B:
  def foo(self):
     print('foo B')
def caller(o):
   print('-----')
   o.foo()
   print('-----')
x=A()
y=B()
caller(x)
caller(y)