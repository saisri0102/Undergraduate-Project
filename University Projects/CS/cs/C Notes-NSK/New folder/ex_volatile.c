#include <stdio.h>
// Observe that a and b are not changing between the evaluation of c and d.
// The compiler can optimize the program by evaluating a + b only once and use it twice
//	while evaluating c and d.
// But if a and b could change outside this thread of code, then the compiler cannot make out.
// In such cases, optimizing would be incorrect.
// We declare the variable as volatile to indicate to the compiler that it should not do 
//	"common subexpression evalation CSE" optimization and it should get the value of volatile
//	variables each time it is used.
int main()
{
//	int a; int b;
	volatile int a; volatile int b;
	scanf("%d %d", &a, &b);
	int c; int d;
	c = a + b + 10;
	printf("after summation one\n");
	d = a + b + 20;
	printf("after summation two\n");
	printf("%d %d\n", c, d);

}
