#include <stdio.h>
#include <string.h>
#include "1_struct.h"

void init(person_t* ptr_person, char* name, int age)
{
	strcpy(ptr_person->name, name);
	ptr_person->age = age;
}
void disp(const person_t* ptr_person)
{
	printf("%s %d\n", ptr_person->name, ptr_person->age);
}
int comp_name(const person_t* lhs, const person_t* rhs)
{
	return strcmp(lhs->name, rhs->name) > 0;
}
void disp_all(const person_t* x, int n)
{
	for(int i = 0; i < n; ++i)
	{
		disp(&x[i]);
	}
}
#if 0
// selection sort:
//	also an exchange sort
//	first i elements are in order; find the smallest amongst i + 1 to n - 1 element
//	bring this to ith position by swapping
void sort(person_t a[], int n, int (*comp)(const person_t*, const person_t*))
{
	int i; int pos; int j;
	for(i = 0; i < n - 1; ++i)
	{
		// smallest bet ith and n -1th pos
		pos = i;
		for(j = i + 1; j < n; ++j)
		{
			if(comp(&a[pos], &a[j]))
			{
				pos = j;
			}
		}
		if(i != pos)
		{
			myswap(&a[i], &a[pos]);
		}
	}
}
void myswap( person_t* lhs,  person_t* rhs)
{
	person_t temp = *lhs; *lhs = *rhs; *rhs = temp;
}
#endif

void init_ptr(person_t x[], person_t* p[], int n)
{
	for(int i = 0; i < n; ++i)
	{
		p[i] = &x[i];
	}
}
void disp_all_ptr(person_t* p[], int n)
{
	for(int i = 0; i < n; ++i)
	{
		// p[i]->name
		disp(p[i]);
	}
}
void myswap_ptr(person_t **a, person_t **b)
{
	person_t* temp;
	temp = *a; *a = *b; *b = temp;
}
void sort_using_ptr(person_t* p[], int n, int (*comp)(const person_t*, const person_t*))
{
	int i; int pos; int j;
	for(i = 0; i < n - 1; ++i)
	{
		// smallest bet ith and n -1th pos
		pos = i;
		for(j = i + 1; j < n; ++j)
		{
			if(comp(p[pos], p[j]))
			{
				pos = j;
			}
		}
		if(i != pos)
		{
			myswap_ptr(&p[i], &p[pos]);
		}
	}
}













