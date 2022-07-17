'''import m1
print('im fine')'''

a={1:'a',2:'b'}
b={3:'c',4:'5'}
print(a)
print(b)
b.update(a)
print(b)
a.update(b)
print(a)