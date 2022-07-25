#include <stdio.h>
#include "1_circle.h"

void read_circle(circle_t* p)
{
	scanf("%lf", &p->r);
}
void disp_circle(const circle_t* p)
{
	printf("%lf\n", p->r);
}
double find_area_circle(const circle_t* p)
{
	return 3.14 * p->r * p->r;
}
