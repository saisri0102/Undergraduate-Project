# file name: 6_file_write.py

# create a file
#	open the file in write mode
#	default is read mode

"""
fout = open("out.txt", "w")
print(fout, type(fout))
print("hello world", file = fout)
fout.close()
"""

# pick all lines containing trouble and write to another file
fin = open("t.txt")
fout = open("t_new.txt", "w")
for line in fin:
	if 'trouble' in line :
		line = line.strip()
		print(line, file = fout)
fin.close()
fout.close()


