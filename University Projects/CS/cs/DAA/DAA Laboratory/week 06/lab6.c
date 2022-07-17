#include "lab6.h"

int main()
{
	struct timespec  start, end;
	int m;
	scanf("%d",&m);
	char * num1 = allocate(m);
	char * num2 = allocate(m);
	scanf("%s",num1);
	scanf("%s",num2);
	num1[m] = '\0';
	num2[m] = '\0';
	if(is_even(m) != 0){
		num1 = add_zero(num1);
		num2 = add_zero(num2);
	}
  int x = length(num1);
	int y = length(num2);
	if(x != y){
		if(x < y){
			num1 = make_equal(num1,y - x);
			x = length(num1);
			y = length(num2);
		}
		if(x > y){
			num2 = make_equal(num2,x - y);
			x = length(num1);
			y = length(num2);
		}
	}
	m = x;
	clock_gettime(CLOCK_REALTIME, &start);
	char * res = Karatsuba(num1,num2,m);
	clock_gettime(CLOCK_REALTIME, &end);
	free_alloc(num1);
	free_alloc(num2);
	//char * res ;
	display(res);
	free_alloc(res);
	printf("\n%lfms\n", time_taken(&start,&end));
	/*int m;
	scanf("%d",&m);
	char * num1 = (char *)allocate(num1,m);
	char * num2 = (char *)allocate(num2,m);
	scanf(" %s",num1);
	scanf(" %s",num2);
	char * result = difference(num1,num2);
	display(result);
	*/
}
