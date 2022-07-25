#include<stdio.h>
#include<stdlib.h>
#include<time.h>
void ssort(int * arr, int n);
void display(int * arr, int n);

int main()
{
	int *p;
	int *sorted;
	int n;
	struct timespec start, end;

	scanf("%d", &n);
	p = (int *)malloc(sizeof(int) *n);
	sorted = (int *)malloc(sizeof(int) *n);
	for (int i = 0; i<n;i++)
		scanf("%d", (p+i));

	clock_gettime(CLOCK_REALTIME, &start);
	ssort(p,n);
	clock_gettime(CLOCK_REALTIME, &end);
	
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	free(p);
	free(sorted);
	return 0;
}

void ssort(int * arr, int n)
{
	int i,j,t, min;
	for (i=0; i<n-1; i++)
	{
		min = i;
		for (j=i+1; j<n ; j++)
		{
			if( arr[j] < arr[min])
			{
				min = j;
			}
		}
		t = arr[i];
		arr[i] = arr[min];
		arr[min] = t;
	}
	display(arr,n);
}
			
void display (int * arr, int n)
{
	int i;
	for (i=0; i<n;i++)
	{
		printf("%d\n", arr[i]);
	}
}
