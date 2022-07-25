// Rules of programming:
// if something should be a constant, make it a constant
//	compiler may replace the use of a constant by its value
//	makes the program more efficient

// Two points to know about constants
//	1. const should be initialized
//	2. const cannot be assigned

// While passing a pointer to a variable, make the corresponding parameter a pointer
//	to constant if the argument should not be changed.
//	- interface becomes more robust. Client knows that his variable cannot be changed by
//	the invoked function
//	- compiler might be able to optimize the code

// making constants :
// 1. using macro
#define MAX 100
// 2. using const qualifier
const int MIN = -100;

// These become more interesting when we have pointers
//

int main()
{
// pointer to a const
#if 0
	const int a = 10; const int b = 20;
	// p is a pointer to an int, which is a constant
	// p can be changed; not *p
	const int *p = &a;
	p = &b;
	//*p = 30; // compile time error
#endif
#if 0
// const pointer
	int a = 10; int b = 20;
	// p is a pointer to an int, which is a constant
	// p can be changed; not *p
	int * const p = &a;
	// p = &b; // compile time error
	*p = 30; 
#endif
#if 0
// const pointer to a const int
	int a = 10; int b = 20;
	// p is a pointer to an int, which is a constant
	// p can be changed; not *p
	const int  * const p = &a;
	// p = &b; // compile time error
	// *p = 30; // compile time error
#endif
// conversion of a  pointer to a variable to a pointer to a const
//	perferctly alright; used very heavily
//	we can treat a variable as  a  constant
// 	we cannot treat a constant as a variable
	int a = 10; 
	// p is a pointer to an int, which is a constant
	// p can be changed; not *p
	const int *p = &a;
	


}
