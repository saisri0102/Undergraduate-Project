// macro:
//	are not part of the language 'C'
//	supported by preprocessor
//	look like functions but are not same
// 	expands the code at the point of call
//	replaces the macro call by macro definition
//		replaces the parameter by the corresponding argument textually
//		no evaluation of arguments
//		arguments are treated as strings
//	syntactically, macro definition has to be on a single line
//		If we  want a macro spanning multiple lines, we should escape the newline
//		Use of a block { } will not work as macro processor does not know 'C'!

// advantages:
//	a) produces inline code - code at the point of call. Macro call does not have the overhead
//	of a function call. As the code will become contiguous after expansion, accessing the code
//	will be faster compared to the case of a function call.
//  b) macros have no types - macros are generic. We might be able to use macros on different
//		types. We can also pass a typename (or any string for that matter) as argument to 
//		macros.
//	This macro can swap variables of any type which supports assignment and initialization
#define myswap(t, x , y) { \
							t temp = x; x = y; y = temp; \
						 }
// disadvantages:
//	a) may result in bloating of code
//	Each macro call is expanded. If a function is called 1000 times, the code of the function shall
//	exist just once. If a macro is called 1000 times, the code shall be expanded 1000 times,
//  thus increasing the code size.
//	b) macros tend to violate the law of least expectation
//	Try in this example
//	sq(5 + 5)
//  10000 / sq(10)
//	int a = 10; int res = sq(a++); // What is the value of res? what is the value of a?

#include <stdio.h>

#define sq(x) x * x
int main()
{
	printf("square : %d\n", sq(10)); // 10 matches x; expands to 10 * 10
	// check using -E option 
	// printf("square : %d\n", 10 * 10);

	int a = 10; int b = 20;
	myswap(int, a, b);
	printf("a : %d b : %d\n", a, b);

	double c = 1.2; double d = 3.4;
	myswap(double, c, d);
	printf("c : %lf d : %lf\n", c, d);


}
