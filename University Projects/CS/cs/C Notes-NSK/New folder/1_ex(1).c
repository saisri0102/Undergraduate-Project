#include <stdio.h>
#include "1_struct.h"
int main()
{
#if 0
	person_t x;
	init(&x, "sir mv", 102);
	disp(&x);
#endif
#if 0
	person_t x[20];
	int n = 5;
	init(&x[0], "MV", 102);
	init(&x[1], "GV", 108);
	init(&x[2], "AN murthy rao", 103);
	init(&x[3], "Ramanujan", 32);
	init(&x[4], "Shankaracharya", 32);
	disp_all(x, n);
	sort(x, n, comp_name);
	disp_all(x, n);
#endif
	person_t x[20];
	person_t* p[20];
	int n = 5;
	init(&x[0], "MV", 102);
	init(&x[1], "GV", 108);
	init(&x[2], "AN murthy rao", 103);
	init(&x[3], "Ramanujan", 32);
	init(&x[4], "Shankaracharya", 32);

	init_ptr(x, p, n);

	disp_all_ptr(p, n); printf("\n");
	disp_all(x, n); printf("\n");
	sort_using_ptr(p, n, comp_name);
	disp_all_ptr(p, n); printf("\n");
	disp_all(x, n); printf("\n");

}





