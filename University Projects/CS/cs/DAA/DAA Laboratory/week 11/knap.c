#include <stdio.h>
#include <stdlib.h>
int MFknap(int F[10][10], int i, int j, int *values, int * weights);
void main()
{
	int n,i,j;
	int ans;
	scanf("%d",&n);
	
	int * weights = (int*)malloc (sizeof(int) * (n+1));
	weights[0] = 0;
	for (i=1; i<n+1; i++)
		scanf("%d", &weights[i]);
		
	int * values = (int*)malloc (sizeof(int) * (n+1));
	values[0] = 0;
	for (i=1; i<n+1; i++)
		scanf("%d", &values[i]);
	
	int w;
	scanf("%d",&w);
	int F[10][10];
	for (i=0; i<n+1;i++)
	{
		for(j=0; j<w+1;j++)
		{
			if (i ==0 || j == 0)
				F[i][j] = 0;
			else
				F[i][j] = -1;
		}
	} 

	for (i=1; i<n+1;i++)
	{
		for(j=1; j<w+1;j++)
		{
				ans = MFknap(F,i,j,values,weights);
		}
	}
	printf("ANS = %d" , ans);
}

int MFknap(int F[10][10], int i, int j, int *values, int * weights)
{
	int val;
	if (F[i][j] < 0)
	{
		if (j< weights[i])
			val = MFknap(F,i-1,j,values,weights); 
		else
		{
			if (MFknap(F,i-1,j,values,weights) > (values[i] + MFknap(F,i-1,j- weights[i],values,weights)))
				val = MFknap(F,i-1,j,values,weights);
			else
				val = values[i] + MFknap(F,i-1,j-weights[i],values,weights);
				
		}
		F[i][j] = val;
	}
	return F[i][j];
}
