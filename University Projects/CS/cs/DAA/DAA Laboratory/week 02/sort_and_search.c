#include<stdio.h>
#include<stdlib.h>
#include<time.h>
int * bubble_sort(int *a, int n);
int binary_search(int *a, int n, int key);
int main()
{
	
	int *p,  ans, element;
	int n;
	
	struct timespec start, end, start2, end2;
	scanf("%d", &n);
	
	p = (int *)malloc(sizeof(int) *n);
	for (int i = 0; i<n;i++)
		scanf("%d", (p+i));
	
	scanf("%d", &element);
	clock_gettime(CLOCK_REALTIME, &start);
	bubble_sort(p,n);
	clock_gettime(CLOCK_REALTIME, &end);
	
	for (int i = 0; i<n;i++)
		printf("%d\n", p[i]);
	
	clock_gettime(CLOCK_REALTIME, &start2);
	ans = binary_search(p,n,element);
	clock_gettime(CLOCK_REALTIME, &end2);
	
	if (ans!= -1)
	{
		printf("Found at Location: %d\n",ans);
	} 
	else printf("NOT FOUND\n");
	
	printf("\nTIME FOR SORTING\n");
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	
	printf("\nTIME FOR SEARCHING\n");
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start2.tv_sec, start2.tv_nsec, end2.tv_sec, end2.tv_nsec);	
	printf("Difference %ld seconds, %ld nanoseconds\n", end2.tv_sec- start2.tv_sec,  end2.tv_nsec- start2.tv_nsec);
	free(p);
	return 0;
}

int * bubble_sort( int *a, int n)
{
	 int i=0,j,t;
	while (!over && i< n-1)
	{
		over =  1;
		for (j= 0; j<(n-i-1); j++)
		{
			if (a[j]> a[j+1])
			{
				t = a[j];
				a[j] = a[j+1];
				a[j+1] = t;
				over = 0;
			}
		}
		i++;
	}
	return(a);
}

int binary_search(int *a, int n, int element)
{
	int lb = 0, ub = n-1, mid;
	mid = (lb+ub)/2;
	while (lb < ub)
	{
		
		if (a[mid] == element)
		{
			return mid;
		}
		else if (a[mid]< element)
		{
			lb = mid+1;
		}
		else if (a[mid]> element)
		{
			ub = mid-1;
		}
		mid = (lb+ub)/2;
		
	}
	return -1;
}
	
