#include <stdio.h>
#include<time.h>
#include<stdlib.h>
#include<string.h>

struct records{
char id[20];
char name[20];
int GPA;
};

void dissort(struct records * arr, int n);

int main()
{
	struct records *p;
	int n;
	
	struct timespec start, end;
	scanf("%d", &n);
	p = (struct records *)malloc(sizeof(struct records) *n);
	for (int i = 0; i<n;i++)
		scanf("%s %s %d", p[i].id, p[i].name, &p[i].GPA);
	
	clock_gettime(CLOCK_REALTIME, &start);
	dissort(p,n);
	clock_gettime(CLOCK_REALTIME, &end);
	//display(p,n);
	
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);
	if ( start.tv_nsec > end.tv_nsec)
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  100000000-start.tv_nsec+ end.tv_nsec);
	else	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	free(p);
	return 0;
}

void dissort(struct records * a, int n)
{
	struct records * s;
	s = (struct records *)malloc(sizeof(struct records) *n);
	int u = a[0].GPA;
	int l = a[0].GPA; 
	for (int i=0; i<n;i++)
	{
		if (a[i].GPA > u)
			u = a[i].GPA;
		else if (a[i].GPA < l)
			l = a[i].GPA;
	}
	int * d;
	d = (int *) malloc (sizeof(int) * (u-l+1));
	
	int i,j;
	for(i=0; i<= u-l; i++)
		d[i] = 0;
	for (i=0; i< n; i++)
		d[a[i].GPA - l] =  d[a[i].GPA - l] + 1;
	for(i=1; i<= u-l; i++)
		d[i] = d[i] + d[i-1];
		
	for (i= n-1; i>=0; i--)
	{
		j = d[a[i].GPA - l];
		s[j-1] = a[i];
		d[a[i].GPA - l] = d[a[i].GPA - l] -1;
	}
	
	for (int i =0; i<n; i++)
	{
		printf("%s %s %d\n", s[i].id, s[i].name, s[i].GPA);
	}
}	
