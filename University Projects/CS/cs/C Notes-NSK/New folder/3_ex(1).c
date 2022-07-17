#include <stdio.h>

int main()
{
#if 0
	int *p;
	p = (int*)malloc(sizeof(int));
	*p = 20;
	int *q = p;
	free(q); // valid statement; ok; what matters is the value of the pointer and not the name
	// ???
#endif

#if 0
	int *p;
	p = (int*)malloc(sizeof(int));
	*p = 30;
	p = (int*)malloc(sizeof(int));
	// changing of p makes us loose the pointer to the location allocated by the earlier
	//	malloc call

	// creates garbage; we have a location but no access
	*p = 40;
	// no garbage collector (python does based on reference count)
	// garbage in turn becomes a memory leak

#endif
	int *p;
	{
		p = (int*)malloc(sizeof(int));
		*p = 30;
		int *q = p;
		free(q); // cannot change q; parameter passing by value
		// q = NULL: or q = 0; // some people think it is safe programming
		// dereferencing a NULL pointer is a guaranteed crash
	}
	// p is a dangling pointer; no location; access;
	printf("*p : %d\n", *p);


}

















