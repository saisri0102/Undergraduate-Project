a=int(input('enter a number : '))
i=0
while i<a:
   j=0
   while j<a:
      if i==j:
          print('1',end=" ")
      else:
          print('0',end=" ")
      j=j+1
   i=i+1
   print()