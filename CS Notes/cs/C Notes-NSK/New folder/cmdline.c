// main can have any one of the following signatures
//	int main()
//	or
//	int main(int argc, char* argv[])
// parameter names are not keywords - but they are normally named as shown
// they carry some interesting abstraction
// When we run the program, we can specify a sequence of strings along with the
//	image name
// Example:
//	./a.out we love computer science
// argc : count of arguments including the image; in this case 5
// argv : pointer to an array of pointers to char. Each element of argv points 
//	to a string.
// We use this concept a lot.
// Example:
//	cat a.c b.c c.c
//  cp x y
//  gcc -c x.c y.c

// simple example : echoes the command line arguments
#include <stdio.h>
int main(int argc, char* argv[])
{
	printf("program name : %s\n", argv[0]);
	for(int i = 1; i < argc; ++i)
	{
		printf("%s ", argv[i]);
	}
	printf("\n");
}
