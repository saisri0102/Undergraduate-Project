#include <stdio.h>
#include <stdlib.h>

struct node
{
	int key;
	struct node *link;  
};
typedef struct node node_t;

void disp(node_t* q)
{
	while(q != NULL)
	{
		printf("%d ", q->key);
		q = q->link;
	}
}
void freelist(node_t* q)
{
	node_t* r;
	while(q != NULL)
	{
		r = q->link;
		free(q);
		q = r;
	}

}
int main()
{
	node_t *p;
	p = (node_t*)malloc(sizeof(node_t));
	p->key = 20;
	p->link = (node_t*)malloc(sizeof(node_t));
	p->link->key = 40;
	p->link->link = (node_t*)malloc(sizeof(node_t));
	p->link->link->key = 60;
	p->link->link->link = NULL;
	disp(p);
	freelist(p);
}














	
