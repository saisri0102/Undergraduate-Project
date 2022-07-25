#include <stdio.h>
void f1(int x)
{
	x = 20;
}

void f2(int* p)
{
	int x = 20;
	p = &x;
}

void f3(int **qq)
{
	printf("f3 called\n");
	int x = 20;
	//*qq = &x; // creates  a dangling pointer
	**qq = x;
	
}
void myswap(int *a, int *b)
{
	int *temp = a; a = b; b = temp;
}

void myswap1(int **mm, int **nn)
{
	int temp = **mm; **mm = **nn; **nn = temp;
}
void myswap2(int **mm, int **nn)
{
	int* temp = *mm; *mm = *nn; *nn = temp;
}
int main()
{
	int a = 10; int b = 20;
	int *p = &a; int *q = &b;
	printf("%d %d %d %d %p %p\n", a, b, *p, *q, p, q);
	myswap2(&p, &q);
	printf("%d %d %d %d %p %p\n", a, b, *p, *q, p, q);
#if 0
	int a = 10; int b = 20;
	int *p = &a; int *q = &b;
	printf("%d %d %d %d %p %p\n", a, b, *p, *q, p, q);
	myswap1(&p, &q);
	printf("%d %d %d %d %p %p\n", a, b, *p, *q, p, q);
#endif
#if 0
	int a = 10; int b = 20;
	int *p = &a; int *q = &b;
	myswap(p, q);
	printf("%d %d %d %d\n", a, b, *p, *q);
#endif
#if 0
	int a = 10;
	f1(a);
	printf("a : %d\n", a);
	
	f2(&a);
	printf("a : %d\n", a);

	//f3(& &a); // error
	
	int *p = &a;
	int **pp = &p;
	f3(pp);
	printf("a : %d\n", a); // 20
#endif



}























