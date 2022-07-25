#include<stdio.h>
#include<stdlib.h>
int main()
{
	int no;
	printf("Enter the no of processes: ");
	scanf("%d",&no);
	int Q[no];
	int burst[no];
	char N[no];
	char ch;
	for(int i =0; i< no; i++)
	{
		printf("Enter process name: ");
		ch = getchar();
		ch = getchar();
		N[i] = ch;
		printf("Enter burst time: ");
		scanf("%d",&(Q[i]));
		
	}
	for(int i = 0; i<no; i++)
		burst[i] = Q[i];
	int quant = 0;
	printf("Enter time quantum: ");
	scanf("%d",&quant);
	
	int wait[no];
	int turn[no];
	int init_wait= 0;
	int done = 0;
	while(done < no)
	{
		for(int i = 0; i<no; i++)
		{
			if(Q[i] != 0 && Q[i] > quant)
			{
				Q[i] -= quant;
				wait[i] = init_wait;
				init_wait += quant;
			}
			else if(Q[i] != 0 && Q[i] <= quant)
			{
				wait[i] = init_wait + Q[i];
				init_wait += Q[i];
				Q[i] = 0;
				done++;
			}	
		}
		
		
	}
	for(int i =0; i<no; i++)
	{
		wait[i] = wait[i] - burst[i];
		turn[i] = wait[i] + burst[i];
	}
	double avgW = 0;
	double avgT = 0;
	for(int i =0; i<no; i++)
	{
		avgW += wait[i];
		avgT += turn[i];
	}
	avgW /= no;
	avgT /= no;
	printf("Process Name\tBurst Time\t Wait Time\t Turnaround Time\t\n");
	for(int i = 0; i<no;i++)
	{
		printf("%c\t\t%d\t\t%d\t\t%d\t\t\n",N[i],burst[i],wait[i],turn[i]);
	} 
	printf("Average wait time is %g.\n",avgW);
	printf("Average turnaround time is %g.\n",avgT);
}
