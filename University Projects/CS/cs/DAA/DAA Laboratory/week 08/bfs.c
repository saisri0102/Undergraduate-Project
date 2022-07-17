#include<stdio.h>
#include<stdlib.h>
void bfs( int [50][50], int, int c);
void bfsfunc (int [50][50], int [50], int v, int n);
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
	
	for(j=0;j<n;j++)
	{
		for(i=0;i<n;i++)
		{
			printf("%d",arr[j][i]);
		}
		printf("\n");
	}
	bfs(arr,n,count);
 
	
}

void bfs( int arr [50][50], int n, int count)
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
			bfsfunc(arr, arrV,i,n);
			
		}
	}
	
	printf("THE ANSWER IS USING BFS : %d\n", count);	
}

void bfsfunc(int arr [50][50], int arrV [50],int v, int n)
{
	int q[50]; 
	int mm =0;	
	arrV[v] = 1;
	q[mm++] = v;
	for (int j=0; j<n; j++)
	{
		if (arr[v][j]== 1 && arrV[j] != 1 )
		{
			arrV[j] = 1;
			q[mm++] = j;
		}
	}
	mm--;
	while(mm>=0)
	{
		
		for (int j=0; j<n; j++)
		{
			if (arr[q[0]][j]== 1 && arrV[j] != 1 )
			{
				arrV[j] = 1;
				q[mm++] = j;
			}
		}
		for (int m = 0; m <mm; m++)
		{
			q[m] = q[m+1];
		}
		mm--;
	}	
}
