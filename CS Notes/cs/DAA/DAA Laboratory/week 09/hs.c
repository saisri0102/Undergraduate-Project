#include <stdio.h>
#include<time.h>
#include<stdlib.h>

void display(int * arr, int n);
void heapify(int * arr, int n, int i);
void sort(int *arr,int n);
int count =0;
int main()
{
	int *p;
	int n;
	
	struct timespec start, end;
	scanf("%d", &n);
	p = (int *)malloc(sizeof(int) *n+1);
	for (int i = 1; i<=n;i++)
		scanf("%d", &p[i]);

	clock_gettime(CLOCK_REALTIME, &start);
	sort(p,n);
	clock_gettime(CLOCK_REALTIME, &end);
	display(p,n);
	
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);
	if ( start.tv_nsec > end.tv_nsec)
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  1000000000-start.tv_nsec+ end.tv_nsec);
	else	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	
	printf("COMPARISON COUNT: %d ", count);
	free(p);
	return 0;
}

void heapify(int * a, int n, int p)
{
	int i=p;
	int t;
	//int over = 0;
	int j = 2 * i;
	//while ( !over && j<=n)
	while (j<=n)
	{
		if(j<n && a[j+1] > a[j])
		{
			++j;
		}
		if (a[i] < a[j])
		{
			count++;
			t = a[i];
			a[i] = a[j];
			a[j] = t;
			i=j;
			j = 2* i;
		}
		else break;
		/*else 
		{
			over = 1;
		}*/
	}
}

void sort (int *a, int n)
{
	int t;
	for(int i = n/2; i>= 1; --i)
	{
		heapify(a,n,i);
	}
	for (int i= n-1; i>=1; --i)
	{
		t = a[1];
		a[1] = a[i+1];
		a[i+1] = t;
		heapify(a,i,1);
	}
}
		

void display(int * arr, int n)
{
	for (int i =1; i<=n; i++)
	{
		printf("%d\n", arr[i]);
	}
}	
