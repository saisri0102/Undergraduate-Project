#include <stdio.h>
#include "1_mydate.h"
#include "1_mydate.h"
#include "1_event.h"
#include "1_event_array.h"

int main()
{
#if 0
	mydate_t d;
	// read
	read_date(&d);
	disp_date(&d);
	// display
#endif

#if 0
	event_t e;
	// access month:
	//	e.date.mm
	//second char in deail of e
	// e.detail[2]
	read_event(&e);
	disp_event(&e);
#endif

	event_array_t events;
	int n;
	scanf("%d", &n);
	read_event_array(events, n);
	disp_event_array(events, n);
	// month of 3rd event
	// events[3].date.mm
	printf("count in Jan: %d\n", count_events_in_month(events, n, 1));
	printf("count in Feb: %d\n", count_events_in_month(events, n, 2));
	printf("count in Oct: %d\n", count_events_in_month(events, n, 10));

	if(event_in_order(&events[0], &events[1]))
	{
		printf("in order\n");
	}
	else
	{
		printf("not in order\n");
	}
}
// we never pass a structure by value ; this leads to copying
// - require more space
// - require more time
// - would cause problems if there are pointers within the structure
// we always pass pointer to a structure
//	want to change the structure : pass a pointer to a variable
//  do not want to change the structure : pass a pointer to a const

