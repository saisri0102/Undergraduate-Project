# file name: 4_file_read.py

# 3. read the whole file into a text file as a single string; is called slurping
# This is limited by the memory available.
# read
"""
f = open("t.txt", "r")
all = f.read()
print(all, type(all))
f.close()
"""

# display unique words in the file
f = open("butter.txt", "r")
all = f.read()
f.close()

wordset = set()
for word in all.split():
	wordset.add(word)

for word in sorted(wordset):
	print(word)

