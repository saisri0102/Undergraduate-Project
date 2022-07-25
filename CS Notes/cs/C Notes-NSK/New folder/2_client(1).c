#include <stdio.h>
#include "2_util.h"
int add(int x, int y)
{
	return x + y;
}

int mul(int x, int y)
{
	return x * y;
}
void disp(int x[], int n)
{
	for(int i = 0; i < n; ++i)
	{
		printf("%d ", x[i]);
	}
	printf("\n");
}
int sq(int x) { return x * x; }
int foo(int x)
{
	return x % 2;
}

int is_even(int x)
{
	return x % 2 == 0;
}
int less_than_3(int x)
{
	return x < 3;
}
int main()
{
#if 0
	int a[5] = {3, 1, 5, 2, 4};
	int b[5];
	mymap(a, b, 5, sq);
	disp(b, 5);
#endif
#if 0
	int a[5] = {3, 1, 5, 2, 4};
	int b[5];
	int n = 5;
	int m;
	myfilter(a, b, n, &m, foo);
	disp(b, m);
#endif
#if 0
	int a[5] = {3, 1, 5, 2, 4};
	int n = 5;
	printf("res : %d\n", myreduce(a, n, add));
	printf("res : %d\n", myreduce(a, n, mul));
#endif
	int a[5] = {3, 1, 5, 2, 4};
	int n = 5;
	printf("res : %d\n", mysearch(a, n, 2));
	printf("res : %d\n", mysearch(a, n, 6));

	printf("res : %d\n", mysearch_predicate(a, n, is_even)); // pos 3: val 2
	printf("res : %d\n", mysearch_predicate(a, n, less_than_3)); // pos 1 : val 1



}






