#include <stdio.h>
#include<time.h>
#include<stdlib.h>

void display(int * arr, int n);
void mergesort(int * arr, int l, int r);
void merge(int *arr, int l, int r);

int main()
{
	int *p;
	int n;
	
	struct timespec start, end;
	scanf("%d", &n);
	p = (int *)malloc(sizeof(int) *n);
	for (int i = 0; i<n;i++)
		scanf("%d", &p[i]);
	
	clock_gettime(CLOCK_REALTIME, &start);
	mergesort(p,0, n-1);
	clock_gettime(CLOCK_REALTIME, &end);
	display(p,n);
	
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);
	if ( start.tv_nsec > end.tv_nsec)
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  100000000-start.tv_nsec+ end.tv_nsec);
	else	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	free(p);
	return 0;
}

void mergesort(int * arr, int l, int r)
{
	int mid;
	mid = (l+r)/2;
	if (l<r)
	{
		mergesort(arr, l,mid);
		mergesort(arr, mid+1, r);
		merge(arr, l,r);
	}
}

void merge(int * arr, int l, int r)
{
	int t[1000000];
	int i,j,k,m;
	m = (l+r)/2;
	i=l; 
	j= m+1; 
	k=l;
	while ((i<=m) && (j<=r))
	{
		if (arr[i] < arr[j])
		{
			t[k] = arr[i];
			i+=1;
		}
		else 
		{
			t[k] = arr[j];
			j+=1;
		}
		k+=1;
	}
	
	while (i<=m)
	{
		t[k] = arr[i];
		i+=1;
		k+=1;
	}
	
	while (j<=r)
	{
		t[k] =arr[j];
		j+=1;
		k+=1;
	}
	
	for (i=l; i<=r; i++)
	{
		arr[i] = t[i];
	}
}

void display(int * arr, int n)
{
	for (int i =0; i<n; i++)
	{
		printf("%d\n", arr[i]);
	}
}		
