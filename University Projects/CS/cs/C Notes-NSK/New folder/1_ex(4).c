#include <stdio.h>

int main()
{
#if 0
	int *p;
	printf("&p : %p\n", &p); // ok
	printf("p : %p\n", p); // logically wrong; using an uninitialized variable
	// program will not crash
	printf("*p : %d\n", *p); // terrible code; looking content of an uninitialized variable
	// as a  pointer and dereferencing it; could crash; undefined behaviour
#endif
	int *p;
	int a = 10;
	p = &a;
	printf("&p : %p\n", &p); // ok
	printf("p : %p\n", p);  // ok; p has been assigned a value
	printf("*p : %d\n", *p); // same as a; ok if a has been given a value

	int **pp;
	//pp = & &a; //1_ex.c:21:7: error: lvalue required as unary ‘&’ operand
  	pp = &p;
	printf("&pp : %p\n", &pp);
	printf("pp : %p\n", pp);
	printf("*pp : %p\n", *pp);
	printf("**pp : %d\n", **pp);

}
