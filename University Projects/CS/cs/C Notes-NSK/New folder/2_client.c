#include <stdio.h>
#include "2_rect.h"

int main()
{
	Rect_t r;
	init_rect(&r, 20, 10);
	printf("area : %d\n", find_area(&r));
	change_length(&r, 30);
	printf("area : %d\n", find_area(&r));
	change_breadth(&r, 30);
	printf("area : %d\n", find_area(&r));

}
