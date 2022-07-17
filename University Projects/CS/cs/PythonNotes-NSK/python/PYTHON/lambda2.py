s='hello'
def f(x):
    if x=='':
        return 0
    else:
        r=1+f(x[1:])
        return r
print(f(s))
def g(y):
    if y=='':
       return ''
    else:
       return y[-1]+g(y[:(f(y)-1)])
print(g(s))