/*
portability:
making the program work on different compilers or OS or hardware with little or no change.
Normally compiled codes are not portable.
In 'C', we talk about source level portability.
How do we achieve this?

	
*/

//1. use standard language
//	Do not use extensions
//	example:
//		nested function is not portable; is a feature of gnu C
#if 0
#include <stdio.h>
int main()
{
	void foo() { printf("this is a test\n"); }
	foo();
}
#endif

// 2. Do not assume about the size of types. Always use sizeof on the type
//	int *p = (int*)malloc(4); // dangerous; What if the size of int is not 4 in
//			some other compiler running on some other architecture
//	guaranteed:
//	sizeof(char) ≤ sizeof(short) ≤ sizeof(int) ≤ sizeof(long)

// 3. do not depend on order of evaluation
//	a[i] = i++;    // undefined
//	is ambiguous; can give different results depending on compilers and compiler options.

//  printf("%c %c", getchar(), getchar());
//	If you input a b, output could be a b or b a

// 4. signed and bitwise operations
//	-25  =>   11001 complement and add 1
//	1111 ....  1110 0110
//	shift right 2 times;
//	should we fill the vacant slots by 1 or 0?
//	signed or logical shift OR magnitude or arithmetic shift
//	sign preserving or value preserving?
// Avoid bitwise operations on signed 
#if 0
#include <stdio.h>
int main()
{
	printf("%d\n", -25 >> 2); // ???
}
#endif

// 5. byte ordering or ending(big endian or little endian)
// matters in interprocess communication
#if 0
#include <stdio.h>
union myunion
{
	unsigned short int x;
	struct  {
		unsigned char a;
		unsigned char b;
	} two;
};
int main()
{
	union myunion u;
	u.x = 0xABCD;
	printf("%x %x\n", u.two.a, u.two.b); // cd ab
}
#endif
// 6. OS dependent features
//	use conditional inclusion
//	or
//	separate files

// 7.
//	check version of your software
#include <stdio.h>

int main()
{
  printf("gcc version: %d.%d.%d\n",__GNUC__,__GNUC_MINOR__,__GNUC_PATCHLEVEL__);
  return 0;
}

