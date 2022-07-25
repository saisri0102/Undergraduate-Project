#include <stdio.h>
#include<time.h>
#include<stdlib.h>

int search(int * a, long int n, int element)
{
	long int i;
	//LEFTMOST
	
	/*for (i =0; i<n; i++)
	{
		if (a[i]== element)
			return i;
	}
	if (i==n)
		return -1;*/
		
	//RIGHT MOST
	for (i =n-1; i>=0; i--)
	{
		if (a[i]== element)
			return i;
	}
	if (i<0)
		return -1;
		
	//ALL
	/*for (i =0; i<n; i++)
	{
		if (a[i]== element)
			printf("%ld\n", i);
	}
	if (i==n-1)
		return -1;
	else return 1;*/
	
}	
int main()
{
	int *p, element, ans;
	long int n;
	struct timespec start, end;
	scanf("%ld", &n);
	p = (int *)malloc(sizeof(int) *n);
	for (long int i = 0; i<n;i++)
		scanf("%d", (p+i));
	scanf("%d", &element);
	clock_gettime(CLOCK_REALTIME, &start);
	ans = search(p,n,element);
	clock_gettime(CLOCK_REALTIME, &end);
	if (ans!= -1)
	rintf("Found at Location: %d\n",ans); 
	else printf("NOT FOUND\n");
	
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	free(p);
	return 0;
}
			
	
