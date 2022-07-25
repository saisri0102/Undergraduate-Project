# filename: module 2
import math
def area_rect(l, b):
	return l * b

def area_triangle(a, b, c):
	s = (a + b + c) / 2.0
	area = math.sqrt(s * (s - a) * (s - b) * (s - c))
	return area

PI = 3.14
def area_circle(r):
	return PI * r * r

