# file name: 3_file_read.py

# 2. read all lines to a list
#	readlines :each element of the list is a line of the file with newline as well
#	We cannot use this technique for huge files as memory may not be sufficient 
#	to hold the whole file.

"""
f = open("t.txt", "r")
lines = f.readlines()
f.close()

for line in lines:
	line = line.strip()  
	print(line)
"""

# let us count the number of troubles
f = open("t.txt", "r")
lines = f.readlines()
f.close()
total_count = 0
for line in lines:
	line = line.strip()  
	total_count += line.count('trouble')
print("total trouble : ", total_count)

