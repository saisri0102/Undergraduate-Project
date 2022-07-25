#ifndef CIRCLE_H
#define CIRCLE_H
struct Circle
{
	double r;
	 
};
typedef struct Circle circle_t;
void read_circle(circle_t*);
void disp_circle(const circle_t*);
double find_area_circle(const circle_t*);
#endif
