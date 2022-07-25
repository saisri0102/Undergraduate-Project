#include <stdio.h>
#include "2_read_write.h"

int main()
{
#if 1
	int a[5][4];
	int m; int n; // m : no. of rows; n : no. of col
	scanf("%d %d", &m, &n);
	read_matrix(a, m, n);
	disp_matrix(a, m, n);
#endif

#if 0
	int b[5];
	printf("%p %p\n", b, &b);
	printf("%p %p\n", b + 1, &b + 1);
#endif

}

