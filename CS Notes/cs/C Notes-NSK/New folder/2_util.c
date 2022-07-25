#include "2_util.h"

void mymap(int a[], int b[], int n, int (*op)(int))
{
	for(int i = 0; i < n; ++i)
	{
		b[i] = op(a[i]);
	}
}

void myfilter(int a[], int b[], int n, int* ptr_m, int (*op)(int))
{
	int j = 0;
	for(int i = 0; i < n; ++i)
	{
		if(op(a[i]))
		{
			b[j++] = a[i];
		}
	}
	*ptr_m = j;
}
int myreduce(int a[], int n, int (*op)(int, int))
{
	// do n - 1 times
	int res = a[0];
	for(int i = 1; i < n ; ++i)
	{
		res = op(res, a[i]);
	}
	return res;
}
// try:
//	pointer version
//	search from right
int mysearch(int a[], int n, int elem)
{
	int pos = -1; int i = 0;
	while(pos == -1 && i < n)
	{
		if(a[i] == elem)
		{
			pos = i;
		}
		i++;
	}
	return pos;
}

int mysearch_predicate(int a[], int n, int (*op)(int))
{
	int pos = -1; int i = 0;
	while(pos == -1 && i < n)
	{
		if(op(a[i]))
		{
			pos = i;
		}
		i++;
	}
	return pos;
}















































