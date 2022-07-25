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


int bsearch(event_array_t a, int l, int r, event_t x, 
	int (*compare)(const event_t *lhs, const event_t *rhs))
{
	int m;
	int pos = -1;
	int res;
	while(pos == -1 && l <= r)
	{
		m = (l + r) / 2;
		res = compare(&a[m], &x);
		printf("%d %d %d %d\n", l, m, r, res);
		if(res == 0)
		{
			pos = m;
		}
		else if(res > 0)
		{
			r = m - 1;
		}
		else
		{
			l = m + 1;
		}
	}
	return pos;
}


















