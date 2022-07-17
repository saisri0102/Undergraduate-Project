#program to accept the string and create a dictionary using first letter as key
s = """ here is the string which has three 
this is for test case string"""
d = {}
for i in s.split():
	print(i[0])
	if i[0] not in d:
		d[i[0]] =list()
		d[i[0]].append(i)
	else:
		if i not in d[i[0]]:
			d[i[0]].append(i)

print()
for k,v in d.items():
	print(k,':',v)

