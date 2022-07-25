#include<stdio.h>
#include<stdlib.h>
void topo( int [50][50], int);
int main()
{
	int i,j;
	int n= 5;
	//scanf("%d", &n);
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
	topo(arr,n); 
}

void topo( int arr [50][50], int n)
{
	int i,j,k;
	int arr1[50];
	int arr2[50];
	int done[50];
	
	for (i=0; i<n; i++)
	{
			arr1[i] = 0;
			arr2[i] =0;
			done[i] =0;
	}
	int tail=-1;
	int donetail =-1;
	int tail2 =-1;
	int count =0, checked =0;
	int itercount =0;
	printf("\n");
	do
	{
		itercount++;
		for (i=0;i<n;i++)
		{
			count =0;
			checked = 0;
			for (j=0;j<n;j++)
			{
				if (arr[j][i] == 0)
				{
					count++;
				}
			
			}
			
			if (count == 5)
			{
				for (j=0;j<n;j++)
				{
					if(done[j]!= i+1)
					{
						checked++;
					}
				}
			
				if (checked ==5)
				{
					arr2[++tail] = i+1;
					done[++donetail] = i+1;
				}
			}		
		}
		
		for (k=0; k<= tail; k++)
		{
			for (j=0;j<n;j++)
				arr[(arr2[k]-1)][j] = 0;
		}
	
		while (arr2[0] != 0)
		{
			arr1[++tail2] = arr2[0];
			for (i=1; i<n; i++)
			{
				arr2[i-1] = arr2[i];
				if (arr2[0]==0)
					tail = -1;
				else
					--tail;
			}
		}
	
	}while(itercount<=n);
	
	printf("\n ANSWER: \n");
	for (i=0;i<n;i++)
	{
		printf("%d ", arr1[i]-1);
	}
	printf("\n");
}
	
		  
	
	
