#include <stdio.h>
// create a number of manifest constants
// a) create a number of named constants
#if 0
const int a = 0;
const int b = 1;
const int c = 2;
const int d = 3;

int main()
{
	printf("%d %d %d %d\n", a, b, c, d);
}
#endif
// b : use enum
// enum stands for enumeration
// equivalent to a number of named constants
// cannot be assiged; compile time error
// leftmost 1 by default has a value 0
// each one to the right unless initialized has the successor value of the left
#if 0
enum {a, b, c, d};
int main()
{
	printf("%d %d %d %d\n", a, b, c, d);
	//a = 11; // Error
}
#endif
enum {a = 10, b, c = 20, d};
int main()
{
	printf("%d %d %d %d\n", a, b, c, d); // 10 11 20 21
	//a = 11; // Error
}


