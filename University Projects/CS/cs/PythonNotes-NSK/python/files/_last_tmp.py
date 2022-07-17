# filename : 1_file.py
# we specify the physical filename - the name by which the operating system
#	know the file - in a function called open.
# we open file in different modes
#	reading(r), writing(w), appending(a) ...
# we get a file handle as the result of opening.
# we use the file handle from that point onwards

'''
# gives a runtime error if the file does not exist and we try to open the file for reading
f = open("junk.txt", "w")
# FileNotFoundError: [Errno 2] No such file or directory: 'junk.txt'
'''


# Let us an existing file for opening.
# An open file uses the resources of the operating system.
# We return the resources by calling a function called close on the open file handle.
f = open("t.txt", "r")
print(f, type(f))  # do not worry about this output!
f.close()