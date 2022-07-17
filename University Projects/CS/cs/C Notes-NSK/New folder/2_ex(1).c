#include <stdio.h>
// dynamic memory management : malloc and free allocate and deallocate memory on the heap
int main()
{
#if 0
	int *p;
	// request for memory
	//	function : malloc requires the # of bytes to be passed as argument
	// returns a generic pointer : void*
	// convert pointer to void to pointer to int
	// creates a variable with no name; can be accessed using a pointer
	p = (int*)malloc(sizeof(int));
	*p = 20;
	// return the location back to runtime : free
	free(p);
#endif

#if 0
	int *p;
	p = (int *)malloc(sizeof(int) * 4); // array on the heap
	p[0] = 11; *(p + 1) = 22;
	free(p);
// on allocation of memory, malloc stores the szie of memory allocated in some location
// That is based on implementation.
// Given the pointer value returned by malloc, it is possible for the implementation
//	to find the size allocated
// the function free finds the book keeping or house keeping info and deallcoates the
//	required amount of memory
#endif

	int *p;
	p = (int *)malloc(sizeof(int) * 4); 

	free(p + 1); // TERRIBLE thing to do
	// p + 1 was not returned by malloc
	// there is no meaningful book keeping associated with p + 1
	// anything may happen
	// UNDEFINED BEHAVIOUR





}
	
