#include<stdio.h>
#include<stdlib.h>
int dfs( int [50][50], int, int c);
void dfsfunc (int [50][50], int [50], int v, int n);
int main()
{
	int n,i,j;
	scanf("%d",&n);
	int count=0;
	int arr[50][50];
	for(j=0;j<n;j++)
	{
		for(i=0;i<n;i++)
		{
			scanf("%d",&arr[j][i]);
		}
	}
	
	printf("THIS IS THE INPUT: \n");
	for(j=0;j<n;j++)
	{
		for(i=0;i<n;i++)
		{
			printf("%d ",arr[j][i]);
		}
		printf("\n");
	}
	count = dfs(arr,n,count);
	printf("THE ANSWER IS USING DFS : %d\n", count); 
	
}

int dfs( int arr [50][50], int n, int count)
{
	
	int i;
	int arrV[50];
	for ( i=0; i<n;i++)
		arrV[i] = 0;
		
	for (i=0; i<n;i++)
	{
		if (arrV[i] == 0)
		{
			count++;
			dfsfunc(arr, arrV,i,n);
		}
	}
		return count;
	
}

void dfsfunc(int arr [50][50], int arrV [50] ,int v, int n)
{
	int ans[50];
	int m = 0;	
	arrV[v] = 1;
	/*for (int d = 0; d<n; d++)
			printf("\t %d%d", d,arrV[d]);*/
	for (int j=0; j<n; j++)
	{
		if (arr[v][j]== 1 && arrV[j] != 1 )
			dfsfunc(arr, arrV,j,n);
	}
}
