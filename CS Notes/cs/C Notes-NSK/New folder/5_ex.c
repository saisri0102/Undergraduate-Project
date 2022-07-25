#include <stdio.h>
#include <stdlib.h>

struct What
{
	int *p;
	int a;
};
typedef struct What what_t;
int main()
{
#if 0
	what_t x;
	what_t y;
	int z = 10000;

	x.a = 100;
	x.p = &z;

	printf("x : %d %d\n", x.a, *(x.p)); // 100 10000
	y = x;
	printf("y : %d %d\n", y.a, *(y.p)); // 100 10000
	x.a = 200; *(x.p) = 20000;
	printf("y : %d %d\n", y.a, *(y.p)); // 100 20000
#endif
#if 0
	what_t x;
	what_t y;

	x.a = 100;
	x.p = (int *)malloc(sizeof(int));
	*(x.p) = 10000;

	y = x;
	printf("y : %d %d\n", y.a, *(y.p));
	free(y.p);
	// x.p : ?  dangling
#endif
#if 0
	what_t x;
	what_t y;
	x.a = 100;
	x.p = (int *)malloc(sizeof(int));
	*(x.p) = 10000;

	y = x;

	y.p = (int *)malloc(sizeof(int)); // ?? safe
#endif
#if 0
	what_t x;
	what_t y;
	x.a = 100;
	x.p = (int *)malloc(sizeof(int));
	*(x.p) = 10000;

	y = x;

	x.p = (int *)malloc(sizeof(int));  // ok
#endif
	what_t x;
 	x.a = 100;
	x.p = (int *)malloc(sizeof(int));
	*(x.p) = 10000;
	x.p = NULL;

	 

}














