#include <stdio.h>
#include "1_search.h"
#if 0
int bsearch(int a[], int l, int r, int x)
{
	int m;
	int pos = -1;
	// when the element could still exist and is not found do
	while(l <= r && pos == -1)
	{
		m = (l + r) / 2;
		if(a[m] == x)
		{
			pos = m;
		}
		else if(a[m] > x)
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
#endif

int bsearch(int a[], int l, int r, int x)
{
	int m = (l + r) / 2;
	if(l > r)
	{
		return -1;
	}
	else if(a[m] == x)
	{
		return m;
	}
	else if(a[m] > x)
	{
		return bsearch(a, l, m - 1, x);
	}
	else
	{
		return bsearch(a, m + 1, r, x);
	}
}





















