#ifndef RECT_H
#define RECT_H
struct Rect
{
	double l;
	double b;
};
typedef struct Rect rect_t;
void read_rect(rect_t*);
void disp_rect(const rect_t*);
double find_area_rect(const rect_t*);
#endif


