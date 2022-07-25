#include <stdio.h>
#include "1_event.h"
void read_event(event_t* ptr_event)
{
	scanf("%s", ptr_event->detail);
	read_date(&ptr_event->date);
}
void disp_event(const event_t* ptr_event)
{
	printf("%s ", ptr_event->detail);
	disp_date(&ptr_event->date);
}

int is_event_in_month(const event_t* ptr_event, int mm)
{
	return is_month_matching(&ptr_event->date, mm);
}

int event_in_order(const event_t* lhs, const event_t* rhs)
{
	return date_in_order(&lhs->date, &rhs->date);
}
