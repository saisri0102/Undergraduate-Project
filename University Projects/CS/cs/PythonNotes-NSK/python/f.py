#a=int(input("enter a no :"))
def f(a):
    #if a>0:
        if a==1:
            r=1
        else:
            r=a*f(a-1)
        return r
print(f(4))
        