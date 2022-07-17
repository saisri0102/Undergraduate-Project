#include <stdio.h>
#include "2_read_write.h"
void read_matrix(int (*x)[4], int m, int n)
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
void disp_matrix(int (*x)[4], int m, int n)
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
