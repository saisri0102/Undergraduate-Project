#ifndef RECT_H
#define RECT_H
struct Rect
{
	int length;
	int breadth;
	int area_;
};
typedef struct Rect Rect_t;
void init_rect(Rect_t*, int, int);
int find_area(const Rect_t*);
void change_length(Rect_t*, int);
void change_breadth(Rect_t*, int);



#endif
