#include "2_rect.h"

void init_rect(Rect_t* ptr_rect, int length, int breadth)
{
	ptr_rect->length = length;
	ptr_rect->breadth = breadth;
	ptr_rect->area_ = length * breadth;
}
int find_area(const Rect_t* ptr_rect)
{
	//return ptr_rect->length * ptr_rect->breadth;
	return ptr_rect->area_;
}
void change_length(Rect_t* ptr_rect, int length) 
{
	ptr_rect->length = length;
	ptr_rect->area_ = ptr_rect->length * ptr_rect->breadth;
}
void change_breadth(Rect_t* ptr_rect, int breadth)
{
	ptr_rect->breadth = breadth;
	ptr_rect->area_ = ptr_rect->length * ptr_rect->breadth;
}

