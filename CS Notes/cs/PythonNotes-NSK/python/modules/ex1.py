# filename: ex1.py

# module:
#	physical unit of reuse
#	refers to a file
#	name should be an identifier
#	include using import statement
#	executed at the point during the program execution
#	not similar to #include of 'C' - executed before compilation
#	can be used to avoid clash of global names


print("one")
import module1
print("two")
print(module1, type(module1))
print("three")


