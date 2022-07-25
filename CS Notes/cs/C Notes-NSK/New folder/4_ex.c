#include <stdio.h>
#include <stdlib.h>

int main()
{
	int *p;
	//p = (int *)malloc(sizeof(int) * 4);
	p = (int *)calloc(4, sizeof(int));
	printf("p : %p\n", p);
	for(int i = 0; i < 4; ++i)
	{
		printf("%d ", p[i]);
	}
	printf("\n");

	// change the array size?
	// increase the size:
	//		may get the same sequence of locations
	//				different sequence of locations
	//		old pointer is conceptually dangling
	//		values are copied; old location freed if we get a new block of locations
	// decrease the size
	//		values at locations which remain are kept
	int *q = (int *)realloc(p, 10000);
	printf("p : %p q : %p\n", p, q);

	free(q);
}
