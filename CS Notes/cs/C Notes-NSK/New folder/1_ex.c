#include <stdio.h>
#include "1_search.h"

int main()
{
	int a[] = {10, 15, 25, 30, 40, 45, 60, 70, 75};
	int n = 9;
	printf("search : %d\n", bsearch(a, 0, n - 1, 30));
	printf("search : %d\n", bsearch(a, 0, n - 1, 65));


}
