#ifndef PRIORITY_QUEUE_H
#define PRIORITY_QUEUE_H
struct component
{
	char detail[20];
	int priority;
};
typedef struct component component_t;
struct node
{
	component_t c;
	struct node *link;
};
typedef struct node node_t;

struct priority_queue
{
	node_t *head;
};
typedef struct priority_queue priority_queue_t;

void init_queue(priority_queue_t *p_queue);
void enqueue(priority_queue_t *p_queue, const component_t* p_comp);
void dequeue(priority_queue_t *p_queue, component_t* p_comp);
void clean_queue(priority_queue_t *p_queue);

#endif




