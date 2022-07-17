// global:
//	all variables declared outside a block with no storage class specified
//	available across files
//	linker takes care of connecting the usage and the definition
//	extern : keyword ; tells the compiler to pass the name to the linker
//	by default, all global names are passed to the linker
//
//  Variables are allocated memory if the variable is initialized.
//	We should not initialize the same variable in more than one file. That would cause linked error.
//	If we declare and do not initialize, the C compiler allocates tentatively memory for the variable in each file - linker will keep only one of them

// global variables should be avoided as far as possible.
// 1. functions written to process global variables are not flexible. They cannot work on any
//	other variable at all. Not at all flexible.
// 2. create a type instead of global variable
//	we can create any number of variables of a particular type
// 3. type errors can result in accessing global variables instead of resulting in preferred compile time error
// 4. may result in impure functions if global variables are used.
//	may break the abstraction; may be difficult to comprehend; may be difficult to maintain

#if 0
int a[10]; int n;
void mysort()
{
	// routine for sorting array a having n elements
	// cannot sort an array called b if any
}
#endif
#if 0
	char name1[20]; int age1;
	char name2[20]; int age2;
	// instead
	struct person { char name[20]; int age; };
	// then created automatic variables
	{
		struct person person1;
		struct person person2;

	}
#endif
#include <stdio.h>
int a; // same as extern int

int main()
{
	printf("a : %d\n", a); // 0
}
