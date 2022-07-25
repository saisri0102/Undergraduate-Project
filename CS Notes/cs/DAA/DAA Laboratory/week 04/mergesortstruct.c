#include <stdio.h>
#include<time.h>
#include<stdlib.h>
#include<string.h>

struct records{
char id[20];
char name[20];
float GPA;
};

void display(struct records * arr, int n);
void mergesort(struct records * arr, int l, int r);
void merge(struct records *arr, int l, int r);

int main()
{
	struct records *p;
	int n;
	
	struct timespec start, end;
	scanf("%d", &n);
	p = (struct records *)malloc(sizeof(struct records) *n);
	for (int i = 0; i<n;i++)
		scanf("%s %s %f", p[i].id, p[i].name, &p[i].GPA);
	
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

void mergesort(struct records * arr, int l, int r)
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

void merge(struct records * arr, int l, int r)
{
	struct records t[1000000];
	int i,j,k,m;
	m = (l+r)/2;
	i=l; 
	j= m+1; 
	k=l;
	while ((i<=m) && (j<=r))
	{
		if (strcmp(arr[i].id,arr[j].id)<0)
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

void display(struct records * arr, int n)
{
	for (int i =0; i<n; i++)
	{
		printf("%s %s %f\n", arr[i].id, arr[i].name, arr[i].GPA);
	}
}		
