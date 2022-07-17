// we use this construct to avoid multiple inclusion of 
// the header file in the same translation
#ifndef MYDATE_H
#define MYDATE_H
struct mydate
{
	int dd;
	int mm;
	int yy;
};
typedef struct mydate mydate_t;
void read_date(mydate_t*);
void disp_date(const mydate_t*);
int is_month_matching(const mydate_t*, int);
int	date_in_order(const mydate_t*, const mydate_t*);
#endif
