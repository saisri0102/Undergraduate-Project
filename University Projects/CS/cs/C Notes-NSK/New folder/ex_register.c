// storage class: register
// registers are part of the CPU. If the variables can be stored in the registers,
//	instead of main memory, accessing shall become faster. This can make the program execution
//	faster. But there are only a few registers. All variables cannot be allocated on the
//  registers.
//	If the user can make out which variables of his program are likely to be access more often, 
//	he can give a request to the compiler to allocate the variable on register.
//  These days the compiler can analyze the program and make out this aspect better.
//	- register
//		is a storage class
//		is a request or a hit to the compiler to allocate the variable on the register
//		treated as auto otherwise
//		address operator not allowed on register variables
#include <stdio.h>
int main()
{
	register int i;
	register int res = 0;
	for(i = 0; i < 10000; ++i)
	{
		res += i;
	}
	//printf("pointer : %p\n", &res); // NO
	
	printf("res : %d\n", res);
}
