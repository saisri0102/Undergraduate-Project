
'''
a=list(filter(lambda x:x%5==0 and x%2!=0,range(1,101)))
print(a)

b=list(filter(lambda x:x%2!=0,list(filter(lambda y:y%5==0,range(1,101)))))
print(b)'''

c=list(filter(lambda x:x%5==0,list(filter(lambda x:x%2!=0,range(1,101)))))
print(c)

'''
m=3
n=0
try:
   print('one')
   print(na)
except NameError as e:
   print(e)
finally:
   print('ananth')
try:
   print('two')
   print(m/n)
except Exception as e:
   print(e)
finally:
   print('boy')'''
