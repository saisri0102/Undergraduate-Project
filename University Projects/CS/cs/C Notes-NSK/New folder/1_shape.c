#include <stdio.h>
#include "1_shape.h"

void read_shapeinfo(shapeinfo_t* p)
{
	if(p->type == 'r')
	{
		read_rect(&p->s.r);
	}
	else if(p->type == 'c')
	{
		read_circle(&p->s.c);
	}
	else
	{		
		printf("type error\n");
	}
}
void disp_shapeinfo(const shapeinfo_t* p)
{
	if(p->type == 'r')
	{
		disp_rect(&p->s.r);
	}
	else if(p->type == 'c')
	{
		disp_circle(&p->s.c);
	}
	else
	{		
		printf("type error\n");
	}
}
double find_area_shapeinfo(const shapeinfo_t* p)
{
	if(p->type == 'r')
	{
		return find_area_rect(&p->s.r);
	}
	else if(p->type == 'c')
	{
		return find_area_circle(&p->s.c);
	}
	else
	{		
		return 0.0;
	}

}








