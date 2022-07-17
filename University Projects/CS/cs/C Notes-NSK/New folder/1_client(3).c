#include <stdio.h>
#include <stdlib.h>
#include "1_priority_queue.h"
// does not check for q empty on dequeue and q full on enqueue
int main()
{
	priority_queue_t q;
	init_queue(&q);
	component_t c;
	int option;
	printf("enter an option : 0 : quit 1 :enqueue 2 : dequeue\n");
	scanf("%d", &option);
	while(option != 0)
	{
		switch(option)
		{
			case 1: 
					printf("enter a string and the priority : \n");
					scanf("%s %d", c.detail, &c.priority);
					enqueue(&q, &c);
					break;
			case 2 :
					dequeue(&q, &c);
					printf("%s %d\n", c.detail, c.priority);
					break;
		}

		printf("enter an option : 0 : quit 1 :enqueue 2 : dequeue\n");
		scanf("%d", &option);
	}
	clean_queue(&q);
}
