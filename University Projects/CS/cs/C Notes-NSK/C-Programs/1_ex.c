/*
multidimensional array:
int a[5][4];
conceptually,
a : two dimensionl array
    5 rows
    4 columnrs
elements : a[0][0] a[0][1] ...a[0][3] a[1][0] ... a[4][3]
Physically, in the memory of the computer,
elements of the array are allocated linear memory
- contiguous
- follows row major fashion of storing
*/
#include <stdio.h>

int main()
{
	int a[5][4];
	int m; int n; // m : no. of rows; n : no. of col
	scanf("%d %d", &m, &n);
	// read the array
	int i; int j;
	for(i = 0; i < m; ++i)
	{
		for(j = 0; j < n; ++j)
		{
			scanf("%d", &a[i][j]);
		}
	}
	// display the array
	for(i = 0; i < m; ++i)
	{
		for(j = 0; j < n; ++j)
		{
			printf("%5d ", a[i][j]);
		}
		printf("\n");
	}

}















