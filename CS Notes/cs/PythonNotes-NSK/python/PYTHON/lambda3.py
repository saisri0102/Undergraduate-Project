l=['ananth','pramod','amogh']
import functools
f=functools.reduce(lambda x,y:x+y,l)
g=len(l)
h=len(f)
print('avg : ',h/g)