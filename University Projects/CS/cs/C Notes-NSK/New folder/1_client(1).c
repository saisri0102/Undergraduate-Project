#include <stdio.h>
#include "1_shape.h"

int main()
{
	shapeinfo_t s;
	s.type = 'r';
	read_shapeinfo(&s);
	disp_shapeinfo(&s);
	printf("area : %lf\n", find_area_shapeinfo(&s));

	s.type = 'c';
	read_shapeinfo(&s);
	disp_shapeinfo(&s);
	printf("area : %lf\n", find_area_shapeinfo(&s));

}
