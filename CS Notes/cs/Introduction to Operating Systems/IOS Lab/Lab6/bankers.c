#include<stdio.h>
int main()
{
	int processes, resources;
	scanf("%d", &processes);
	scanf("%d", &resources);
	int total[resources];
	int allocation[processes][resources];
	int max[processes][resources];
	int need[processes][resources];
	int available[resources];
	int done[processes];
	
	printf("Number of processes: %d\n", processes);
	printf("Number of resources: %d\n", resources);
	for (int i = 0; i< resources; i++)
	{
		scanf("%d" , &total[i]);
		printf("Resource %d has %d instances\n", i+1, total[i]);
	}
		
	for (int i = 0; i< processes; i++)
	{
		done[i] = 0;
		for (int j = 0; j< resources; j++)
		{
			 scanf("%d" , &allocation[i][j]);
		}
	}
	
	for (int i = 0; i< processes; i++)
	{
		for (int j = 0; j< resources; j++)
		{
			 scanf("%d" , &max[i][j]);
		}
	}
	
	for (int i = 0; i< processes; i++)
	{
		for (int j = 0; j< resources; j++)
		{
			 need[i][j] = max [i][j] - allocation[i][j] ;
		}
	}
	
	for (int i = 0; i< processes; i++)
	{
		printf("Process %d\n", i+1);
		printf("Allocation : ");
		for (int j = 0; j< resources; j++)
		{
			 printf("%d " , allocation[i][j]);
		}
		printf("\nMax : ");
		for (int j = 0; j< resources; j++)
		{
			 printf("%d ", max[i][j]);

		}
		printf("\nNeed : ");
		for (int j = 0; j< resources; j++)
		{

			 printf("%d ", need[i][j]);
		}
		printf("\n");
		printf("___________________________________\n");
	}
	
	for (int j =0 ; j< resources; j++)
	{
		available[j] = 0;
		for (int i = 0; i< processes; i++)
		{
			available[j] += allocation[i][j] ;
		}
	}
	
	printf("Available : \n");
		for (int j = 0; j< resources; j++)
		{
			 available[j] = total[j] - available[j];
			 printf("%d " ,available[j]);
		}
	printf("\n");
	int donecount =0;
	int i;
	while (donecount < processes)
	{
		int not = 0;
		for (i = 0; i< processes; i++)
		{
			int count = 0;
			for (int j = 0; j< resources; j++)
			{
				 if (need[i][j] <= available[j])
				 {
				 	count++;
				 }
				 else
				 {
				 	not++;
				 	break;
				 }
				 
			}

			if (count == resources && done[i] != 1)
			{
				
				printf("\n");
				printf("Process %d Available = ",i + 1);
				for (int k = 0; k< resources; k++)
				{
					available[k] =  available[k] + allocation[i][k];
					printf("%d ", available[k] );
				}
				done[i] = 1;
				donecount += 1;
				printf("\n");
				break;
			}
			if (not == processes)
			{
				printf("DEADLOCK\n");
				break;
			}
			
		
		}
	}
	printf("\n");
}
