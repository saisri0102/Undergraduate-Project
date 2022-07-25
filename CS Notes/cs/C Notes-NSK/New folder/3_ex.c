#include <stdio.h>
#include "3_read_write.h"

int main()
{

	int a[5][4];
	int m; int n; // m : no. of rows; n : no. of col
	scanf("%d %d", &m, &n);
	read_matrix(a, 5, 4, m, n);
	disp_matrix(a, 5, 4, m, n);


}


