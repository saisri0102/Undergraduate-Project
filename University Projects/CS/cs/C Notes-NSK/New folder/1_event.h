#ifndef EVENT_H
#define EVENT_H

#include "1_struct.h"

struct event
{
	char detail[30];
	mydate_t date;
};
typedef struct event event_t;
void read_event(event_t*);
void disp_event(const event_t*);
int is_event_in_month(const event_t*, int mm);
int event_in_order(const event_t*, const event_t*);
#endif
