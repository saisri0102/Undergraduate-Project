#include <stdio.h>
#include "1_event_array.h"

void read_event_array(event_array_t events, int n)
{
	for(int i = 0; i < n; ++i)
	{
		read_event(&events[i]);
	}
}
void disp_event_array(const event_array_t events, int n)
{
	for(int i = 0; i < n; ++i)
	{
		disp_event(&events[i]);
	}
}
int count_events_in_month(const event_array_t events, int n, int mm)
{
	int c = 0;
	for(int i = 0; i < n; ++i)
	{
		if(is_event_in_month(&events[i], mm))
		{
			++c;
		}
	}
	return c;
}
