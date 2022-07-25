#include <stdio.h>
#include <stdlib.h>
#include <string.h>

#include "1_priority_queue.h"

void init_queue(priority_queue_t *p_queue)
{
	p_queue->head = NULL;
}
void enqueue(priority_queue_t *p_queue, const component_t* p_comp)
{
	// create a  node
	node_t* temp = (node_t*)malloc(sizeof(node_t));
	// populate the component in the node from the parameter
	temp->c.priority = p_comp->priority;
	strcpy(temp->c.detail, p_comp->detail);
	// insert the node into the linked list
	temp->link = p_queue->head;
	p_queue->head = temp;
}
void dequeue(priority_queue_t *p_queue, component_t* p_comp)
{
	// find the node with the highest priority
	node_t* prev = NULL;
	node_t* pres = p_queue->head;
	int max = 0; // priorities are non zero positive values
	node_t* prev_max;
	while(pres != NULL)
	{
		if(pres->c.priority >= max)
		{
			max = pres->c.priority;
			prev_max = prev;
		}
		prev = pres;
		pres = pres->link;
	}
	node_t* temp; // node to remove
	// middle of list
	if(prev_max != NULL )
	{
		// copy to the parameter
		strcpy(p_comp->detail, prev_max->link->c.detail);
		p_comp->priority = prev_max->link->c.priority;
		// remove it
		// short ckt
		temp = prev_max->link;
		prev_max->link = prev_max->link->link;
		free(temp);
	}
	else // beginning of list; head will change
	{
		strcpy(p_comp->detail, p_queue->head->c.detail);
		p_comp->priority = p_queue->head->c.priority;
		// remove it
		// short ckt
		temp = p_queue->head;
		p_queue->head = p_queue->head->link;
		free(temp);
	}
}


void clean_queue(priority_queue_t *p_queue)
{
	// TODO
}





















