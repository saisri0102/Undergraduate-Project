#ifndef SHAPE_H
#define SHAPE_H
#include "1_rect.h"
#include "1_circle.h"
 
union Shape
{
	rect_t r;
	circle_t c;
};
typedef union Shape shape_t;
struct ShapeInfo
{
	shape_t s;
	char type; // r for rect and c for circle
};
typedef struct ShapeInfo shapeinfo_t;
void read_shapeinfo(shapeinfo_t*);
void disp_shapeinfo(const shapeinfo_t*);
double find_area_shapeinfo(const shapeinfo_t*);
#endif
