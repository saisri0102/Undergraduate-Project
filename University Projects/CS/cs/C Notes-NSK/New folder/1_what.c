#include <stdio.h>

int add(int x, int y)
{
	return x + y;
}

int mul(int x, int y)
{
	return x * y;
}

int what(int x, int y, int (*op)(int, int))
{
	return op(x, y);
}

int main()
{
	printf("result : %d\n", add(5, 6));
	int (*p)(int, int); // p is a  pointer to a function which takes two int as parameters
//	returns an int
#if 0
	p = &add;
	printf("result : %d\n", (*p)(5, 6));
	printf("p : %p add : %p\n", p, add);
#endif
	p = add;
	printf("result : %d\n", p(5, 6));
	printf("p : %p add : %p\n", p, add);

	printf("res : %d\n", what(3, 4, add));
	printf("res : %d\n", what(3, 4, mul));

}










