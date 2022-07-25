#include <stdio.h>
#include "1_struct.h"
#include "1_struct.h"
#include "1_event.h"
#include "1_event_array.h"
#include <string.h>

int compare_detail(const event_t* lhs, const event_t* rhs)
{
	return strcmp(lhs->detail, rhs->detail);
}
int main()
{
	event_array_t events;
	int n;
	scanf("%d", &n);
	read_event_array(events, n);
	disp_event_array(events, n);

	event_t e;
	printf("reading event : ");
	read_event(&e);
	disp_event(&e);

	int res = bsearch(events, 0, n - 1,  e, compare_detail);
	printf("res : %d\n", res);

	read_event(&e);
	res = bsearch(events, 0, n - 1,  e, compare_detail);
	printf("res : %d\n", res);

}

