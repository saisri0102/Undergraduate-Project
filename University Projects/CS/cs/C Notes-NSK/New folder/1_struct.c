#include <stdio.h>
#include "1_struct.h"

void read_date(mydate_t* ptr_date)
{
	scanf("%d %d %d", &ptr_date->dd, &ptr_date->mm, &ptr_date->yy);
}
void disp_date(const mydate_t* ptr_date)
{
	printf("%d-%d-%d\n", ptr_date->dd, ptr_date->mm, ptr_date->yy);
}

int is_month_matching(const mydate_t* ptr_date, int mm)
{
	return ptr_date->mm == mm;
}

int	date_in_order(const mydate_t* lhs, const mydate_t* rhs)
{
	int res = 0;
	if(lhs->yy < rhs->yy)
	{
		res = 1;
	}
	else if(lhs->yy == rhs->yy && lhs->mm < rhs->mm)
	{
		res = 1;
	}
	else if(lhs->yy == rhs->yy && lhs->mm == rhs->mm && lhs->dd < rhs->dd)
	{
		res = 1;
	}
	return res;
}
