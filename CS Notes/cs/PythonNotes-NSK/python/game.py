a='rise'
c=len(a)
count=0
i=0
f=0
print('length of the word : ',c)
b=input('enter a word:')
while i<c:
    for j in b:
        if j in a:
            if a[i]==b[i]:
                count+=1
            else:
                f=f+1
        i=i+1
print(count,'sheeps')
print(f,'goats')
              
    