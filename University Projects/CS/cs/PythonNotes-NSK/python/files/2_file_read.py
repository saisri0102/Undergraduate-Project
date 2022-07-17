# filename: 2_file_read.py
# reading a file
"""
# 1. read line by line
#	We also observe the end of line is stored. This causes problems in comparison. So
# we get that removed using a function called strip on strings.
f = open("t.txt", "r")
line1 = f.readline()
print("first line : ", line1)
line2 = f.readline()
print("second line : ", line2)
line1 = line1.strip();  line2 = line2.strip()
print("first line : ", line1)
print("second line : ", line2)
f.close()
"""

"""
# To read the whole file, we read line by line until the readline returns an empty line
f = open("t.txt", "r")
line = f.readline()
while line:
	line = line.strip() # remember to assign back to line!!
	print(line)
	line = f.readline()
f.close()
"""

"""
# output line number for each line
f = open("t.txt", "r")
line = f.readline()
i = 0
while line:
	line = line.strip() # remember to assign back to line!!
	i += 1
	print(i, ":", line)
	line = f.readline()
f.close()
"""




