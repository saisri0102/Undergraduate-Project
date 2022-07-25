#include <stdio.h>
#include "3_read_write.h"
void read_matrix(int rowsize; int columnsize; int x[rowsize][columnsize], 
		int rowsize, int columnsize, int m, int n)
{
	int i; int j;
	for(i = 0; i < m; ++i)
	{
		for(j = 0; j < n; ++j)
		{
			scanf("%d", &x[i][j]);
		}
	}

}
void disp_matrix(int rowsize; int columnsize; int x[rowsize][columnsize], 
		int rowsize, int columnsize, int m, int n)
{
	int i; int j;
	for(i = 0; i < m; ++i)
	{
		for(j = 0; j < n; ++j)
		{
			printf("%5d ", x[i][j]);
		}
		printf("\n");
	}
}



