#include<stdio.h>
#include<stdlib.h>

struct partition
{
int size;
char status;
int frag;
};

struct process
{
char name;
int psize;
};

void main()
{
	int segs;
	printf("Enter number of memory segments: ");
	scanf("%d", &segs);
	struct partition parts[segs];
	for (int i =0; i<segs; i++)
	{
		printf("Enter partition size: ");
		scanf("%d", &parts[i].size);
		parts[i].status = ' ';
		parts[i].frag = 0;
	}
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
		printf("Enter process size: ");
		scanf("%d",&(p[i].psize));		
	}
	
	for(int i = 0; i<segs; i++)
	{
		for (int j =i+1; j<segs; j++)
		{
			if(parts[i].size < parts[j].size)
			{
				struct partition temp;
				temp =  parts[j];
				parts[j]=parts[i];
				parts[i] = temp;
			}
		}
	}
	
	for(int i= 0; i<no; i++)
	{
		for (int j=0; j<segs; j++)
		{
			
			if (p[i].psize <= parts[j].size && parts[j].status == ' ')
			{
				printf("%d %d", p[i].psize, parts[j].size); 
				parts[j].status = p[i].name;
				parts[j].frag = parts[j].size - p[i].psize;
				break;
			}
		}
	}
	
	printf("Partition No\t Part Size\t Status\t Frag Size\t\n");
	for(int i = 0; i<segs; i++)
	{
		printf("%d\t\t%d\t\tallocated(%c)\t\t%d\t\t\n",i,parts[i].size,parts[i].status,parts[i].frag);
	}
}
