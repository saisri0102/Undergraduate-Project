#include <stdio.h>
#include "1_rect.h"

void read_rect(rect_t* p)
{
	scanf("%lf %lf", &p->l, &p->b);
}
void disp_rect(const rect_t* p)
{
	printf("%lf %lf\n", p->l, p->b);
}
double find_area_rect(const rect_t* p)
{
	return p->l * p->b;
}
