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
void inssort(struct records * arr, int n);
void ins(struct records *arr, int n, struct records x);

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
	inssort(p,n);
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

void inssort(struct records * a, int n)
{
	for (int i=1;i<n;i++)
		ins(a,i,a[i]);
}

void ins(struct records * a, int n, struct records x)
{
	int i = n-1;
	while (i>=0 && strcmp(a[i].id, x.id) < 0)
	{
		a[i+1] = a[i];
		--i;
	}
		a[i+1] = x;
}

void display(struct records * arr, int n)
{
	for (int i =0; i<n; i++)
	{
		printf("%s %s %f\n", arr[i].id, arr[i].name, arr[i].GPA);
	}
}		
