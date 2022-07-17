#include <stdio.h>
#include "mylist.h"
#include <stdlib.h>

void init_list(mylist_t* ptr_list)
{
	ptr_list->head = NULL;
}
// 1. empty list
// 2. insert in the middle
// 3. insert in the beginning
// 4. insert at the end
void insert_list(mylist_t* ptr_list, int key)
{
	// create the node
	node_t* temp = (node_t*)malloc(sizeof(node_t));
	temp->key = key; temp->link = NULL;

	// 1.empty list
	if(ptr_list->head == NULL)
	{
		ptr_list->head = temp;
		temp->link = NULL;
	}
	else
	{
		// traverse
		node_t* prev = NULL;
		node_t* pres = ptr_list->head;
		while(pres != NULL && pres->key < temp->key )
		{
			prev = pres;
			pres = pres->link;
		}
		if(prev == NULL) // insert in the beginning
		{
			temp->link = pres;
			ptr_list->head = temp;
		}
		else // middle or end
		{
			temp->link = pres;
			prev->link = temp;
		}
		
	}


}

void disp_(node_t* q)
{
	while(q != NULL)
	{
		printf("%d ", q->key);
		q = q->link;
	}
}

void disp_list(mylist_t* ptr_list)
{
	disp_(ptr_list->head);
}
void free_list_(node_t* q)
{
	node_t* r;
	while(q != NULL)
	{
		r = q->link;
		free(q);
		q = r;
	}
}
void free_list(mylist_t* ptr_list)
{
	free_list_(ptr_list->head);
}










