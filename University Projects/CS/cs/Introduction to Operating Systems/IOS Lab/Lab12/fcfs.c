#include<stdio.h>
void main()
{
	int queue[100],n,head,i,j,k,seek=0,diff;
        float avg;
	
	printf("*** FCFS Disk Scheduling Algorithm ***\n");
        printf("Enter the size of Queue\t");
        scanf("%d",&n);
        printf("Enter the Queue\t");
        for(i=1;i<=n;i++)
        {
        	scanf("%d",&queue[i]);
        }
        
	printf("Enter the initial head position\t");
        scanf("%d",&head);
        queue[0]=head;
        printf("\n");
        
	for(j=0;j<=n-1;j++)
        {
		if (queue[j+1]>queue[j])
        		diff= queue[j+1]-queue[j];
		else
			diff= queue[j]-queue[j+1];
                seek+=diff;
                printf("Move from %d to %d with Seek %d\n",queue[j],queue[j+1],diff);
        }
             
	printf("Total Seek Time is %d\n",seek);
        avg=seek/(float)n;
        printf("Average Seek Time is %f\n",avg);
}
