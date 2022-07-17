# file name: 5_file_read.py

# 4. reading file
"""
# file object is iterable. on iteration, it returns a line of the file each time.
f = open("butter.txt", "r")
for line in f :
	line = line.strip()
	print(line)
f.close()
"""

# create a frequency of each word in the file
# display in the decreasing order of frequency
f = open("butter.txt", "r")
info = { }
for line in f :
	line = line.strip()
	for word in line.split():
		if word not in info :
			info[word] = 0
		info[word] += 1
f.close()
for word in sorted(info, reverse = True, key = lambda k : info[k]):
	print(word, info[word])
