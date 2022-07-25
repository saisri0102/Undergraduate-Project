// static:
//	static has multiple meanings depending on the context of usage.
//	In terms of storage class, there are two ways of using
//	a) external static
//			declared outside a block
//	b) internal static
//			declared inside a block

// Internal static variables:
//	- life time : throughout the program
//		created when the program starts executing - at the point of loading
//		allocated on data segment
//		can be initialized by compile time expressions
//		uninitialized variables are filled with 0
//		destroyed when the program terminates
// - scope : by name, limited to the block
//			can be accessed using a  pointer outside a block
//		safe to return a pointer to a static variable of a block

// As it is associated with the function definition than a function call,
//	we would prefer to avoid this feature. Java and most of the languages apart from c++
//	which evolved from 'C' have abandoned this feature.

#if 0
#include <stdio.h>
int foo()
{
	static int count = 0; // only once; at the point of loading
	// Does something here
	return ++count;
}

int main()
{
	printf("foo called %d times\n", foo());
	printf("foo called %d times\n", foo());
	printf("foo called %d times\n", foo());
	printf("foo called %d times\n", foo());

}
#endif

// note: this feature cannot be used for closure as the property is not associated with the
//	callable; but with the definition.

#include <stdio.h>
int* foo() // perfectly safe
{
	static int count = 0; // only once; at the point of loading
	// Does something here
	count++;
	return &count;
}

int main()
{
	int *p = foo();
	printf("*p :  %d\n", *p); // 1
	int *q = foo(); // p points to count of foo; changing count affects *p !!
	printf("*p :  %d\n", *p); // 2 and not 1 !!

}



