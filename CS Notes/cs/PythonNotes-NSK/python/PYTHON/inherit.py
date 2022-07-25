class base():
      def foo(self):
        print('foo')
class der(base):
      def foo1(self):
        print('der')
t=der()
t.foo1()
t.foo()