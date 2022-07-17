// external static:
//	outside a block
//	could be a variable or a function
//	lifetime : through out the program
//				created at load time
//				variables initialized by default to 0
//				destroyed when the program terminates
//				allocated on data segment
//	scope :
//				only in that file - in that translation
//				name is not passed onto the linker

#include <stdio.h>
static void foo()
{
	printf("this is foo\n");
} 
static char names[][10] = {
	"one", "two", "three", "four"
};
int main()
{
	foo();
	for(int i = 0; i < 4; ++i)
	{
		printf("%s\n", names[i]);
	}
}
