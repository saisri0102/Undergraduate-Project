#include <stdio.h>
void warsh (int A[10][10], int n);

int main()
{
	int n;
	scanf("%d",&n);
	int A[10][10];
	
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			scanf("%d",&A[i][j]);
		}
	}

	warsh(A,n);
	for(int i=0;i<n;i++)
	{
		for(int j=0;j<n;j++)
		{
			printf("%d ",A[i][j]);
		}
		printf("\n");
	}
}

void warsh (int A[10][10],int n)
{
	int i,j,k;
	for (k=0;k<n;k++)
		for (i=0;i<n;i++)
			for (j=0;j<n;j++)
				A[i][j] = A[i][j] || (A[i][k] && A[k][j]);
}
