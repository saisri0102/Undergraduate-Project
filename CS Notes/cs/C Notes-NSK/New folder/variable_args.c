// find sum of n integers
// signature:
// int sum(int n, ...);
// The first argument is an integer.
// Followed by any # of arguments of any type
// Compiler cannot check for types
// This is type unsafe.

// Semantics of our function :
// The first argument indicates the number of integers following it.

// How does this work?
// make a variable of type : va_list
// initialize it to point to the parameter after the last named parameter
// get the value at the location by using va_arg. Observe the second argument
//	is a type.
// This macro gets the value of the given type from that location adn also 
//	advances the variable of va_list to the location of the next parameter
// At the end, break the relationship between the variable and the stack frame
//	by using the macro va_end.

// va_arg should be given the next expected type as argument. If it does not 
//	match what is pushed in, we may have unexpected results.
// Remember that the type info is not stored at runtime - value of any bit pattern
//	depends on how we interpret it.

#include <stdio.h>
#include <stdarg.h>

int sum(int n, ...); // declaration

int main()
{
	printf("sum : %d\n", sum(5, 11, 33, 22, 55, 44));
	printf("sum : %d\n", sum(3, 200, 300, 100));

}

// definition
int sum(int n, ...)
{
	int s = 0;
	va_list va;
	va_start(va, n);
	for(int i = 0; i < n; ++i)
	{
		s += va_arg(va, int);
	}
	va_end(va);
	return s;
}




