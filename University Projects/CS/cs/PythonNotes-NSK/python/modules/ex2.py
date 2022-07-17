# filename : ex2.py

# can import # of modules using comma separated list
import module2
# find area of rectangle
#print("area : ", area_rect(20, 10)) # error

# should use a fully qualified name
print("area rectangle: ", module2.area_rect(20, 10))
print("area triangle: ", module2.area_triangle(3, 4, 5))
print("area circle: ", module2.area_circle(7))







