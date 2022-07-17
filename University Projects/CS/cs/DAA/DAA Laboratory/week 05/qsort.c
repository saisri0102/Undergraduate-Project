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
void quicksort(struct records * arr, int l, int r);
int split(struct records *arr,int l, int r);
void swap (struct records *arr, int n1, int n2);


int main()
{
	struct records *p;
	int n;
	
	struct timespec start, end;
	scanf("%d", &n);
	p = (struct records*)malloc(sizeof(struct records) *n);
	for (int i = 0; i<n;i++)
		scanf("%s %s %f", p[i].id, p[i].name, &p[i].GPA);
		
	clock_gettime(CLOCK_REALTIME, &start);
	quicksort(p,0, n-1);
	clock_gettime(CLOCK_REALTIME, &end);
	display(p,n);
	
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);
	if ( start.tv_nsec > end.tv_nsec)
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  1000000000-start.tv_nsec+ end.tv_nsec);
	else	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	free(p);
	return 0;
}

void quicksort(struct records * arr, int l, int r)
{
	int part;
	if (l<r)
	{
		part = split(arr,l,r);
		quicksort(arr,l,part-1);
		quicksort(arr,part+1,r);
	}
}

int split(struct records * arr, int l, int r)
{
	struct records * t[1000000];
	struct records pivot = arr[r];
	int leftp = l;
	int rightp = r-1;
	
	while(1)
	{
		while (strcmp(arr[leftp].id, pivot.id) <0)
			leftp++;
		
		while (rightp>0 && strcmp(arr[rightp].id , pivot.id )>0)
			rightp--;
	
		if (leftp >= rightp)
			break;
		else 
			swap(arr,leftp,rightp);
	}	
		
	swap (arr,leftp,r);
	return leftp;
}

void swap(struct records * arr , int n1, int n2)
{
	struct records t;
	t = arr[n1];
	arr[n1]= arr[n2];
	arr[n2] = t;
}

void display(struct records * arr, int n)
{
	for (int i =0; i<n; i++)
	{
		printf("%s %s %f\n", arr[i].id, arr[i].name, arr[i].GPA);
	}
}		
