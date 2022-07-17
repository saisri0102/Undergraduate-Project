#include<stdio.h>
#include<stdlib.h>
struct process{
char name;
int priority;
int burst;
int waiting;
int turnaround;
};

int main()
{
	int no;
	printf("Enter the no of processes: ");
	scanf("%d",&no);
	struct process p[no];
	char ch;
	for(int i =0; i< no; i++)
	{
		printf("Enter process name: ");
		ch = getchar();
		ch = getchar();
		p[i].name = ch;
		printf("Enter burst time: ");
		scanf("%d",&(p[i].burst));
		printf("Enter priority: ");
		scanf("%d",&(p[i].priority));
		p[i].waiting = 0;
		p[i].turnaround = 0;
		
	}
		
	for(int i = 0; i<no; i++)
	{
		for (int j =i+1; j<no; j++)
		{
			if(p[i].priority > p[j].priority)
			{
				struct process temp;
				temp =  p[j];
				p[j]=p[i];
				p[i] = temp;
			}
		}
	}
	
	for(int i = 0; i<no; i++)
	{
		p[i].turnaround = p[i].waiting;
		p[i].turnaround+= p[i].burst;
		for (int j = i+1; j<no ; j++)
		{
			p[j].waiting+= p[i].burst;
		}
	}
	
	printf("Process Name\tPriority Val\t Burst Time\t Wait Time\t Turnaround Time\t\n");
	for(int i = 0; i<no; i++)
	{
		printf("%c\t\t%d\t\t%d\t\t%d\t\t%d\t\t\n",p[i].name,p[i].priority,p[i].burst,p[i].waiting,p[i].turnaround);
	}
	
	double avgw = 0.0, avgt = 0.0;
	for(int i =0; i<no; i++)
	{
		avgw += p[i].waiting;
		avgt += p[i].turnaround;
	}
	avgw /= no;
	avgt /= no;
	
	printf("Average wait time is %g\n",avgw);
	printf("Average turnaround time is %g\n",avgt);
}
	
	
		
