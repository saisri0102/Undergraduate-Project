#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<limits.h>

void display(int **,int);
int get_next_permutation(int *permutation, int n);
void print_permutation(int *permutation, int n);
double time_elapsed(struct timespec *start, struct timespec *end);

int main()
{
	int n,i,j;
	int cost;
	int pcount=0;
	int cost_MIN=INT_MAX;
	int *permutation;
	scanf("%d",&n);
	int *arr[n];
	struct timespec start;
	struct timespec end;
	int startPoint,destPoint;
	permutation = (int *) malloc(n * sizeof(int));
	
	for(j=0;j<n;j++)
	{
		arr[j]=(int*)malloc(n * sizeof(int));
	}
	for(j=0;j<n;j++)
	{
		for(i=0;i<n;i++)
		{
			scanf("%d",&arr[j][i]);
		}
	}
	
	display(arr,n);
	
	clock_gettime(CLOCK_REALTIME, &start);
	
	for(i = 0; i < n; i++)
	{
		permutation[i] = i;
	}

	do
	{
		cost=arr[permutation[0]][0];
		for(i=1;i<n;i++)
		{
			destPoint=permutation[i];
			startPoint=permutation[i-1];
			cost+=arr[destPoint][startPoint];
		}
		cost+=arr[destPoint][0];

		if(cost<cost_MIN)
		{
			cost_MIN=cost;
		}
	}	while(get_next_permutation(permutation, n));	
	
	clock_gettime(CLOCK_REALTIME, &end);

	printf("\n COST = %d\n",cost_MIN);
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);
	if ( start.tv_nsec > end.tv_nsec)
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  100000000-start.tv_nsec+ end.tv_nsec);
	else	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	
	for(j=0;j<n;j++)
	{
		int* cp=arr[j];
		free(cp);
	}
}

void display(int** arr,int n)
{
	int i,j;
	printf("INPUT:\n");
	for(j=0;j<n;j++)
	{
		for(i=0;i<n;i++)
		{
			printf("%d\t",arr[j][i]);
		}
		printf("\n");
	}
}

int get_next_permutation(int *permutation, int n) {
	int i;
	int j;
	int k;
	int temp_int;
	int swaps;

	//find i
	for(i = n-2; i >= 0; i--) {
		if(permutation[i] < permutation[i+1]) {
			break;
		}
	}
	if(i == -1) {
		return 0;
	}

	for(j = i+1; j < n; j++) {
		if(permutation[j] < permutation[i]) {
			break;
		}
	}
	j--;

	temp_int = permutation[i];
	permutation[i] = permutation[j];
	permutation[j] = temp_int;

	//printf("DEBUG*i=%d,j=%d*", i, j); print_permutation(permutation, n);
	swaps = (n-1-i)/2;	
	for(k = 0; k < swaps; k++) {
		temp_int = permutation[i+1+k];
		permutation[i+1+k] = permutation[n-1-k];
		permutation[n-1-k] = temp_int;
	}
	return 1;
}

void print_permutation(int *permutation, int n) {
	int i;
	printf("[");
	for(i = 0; i < n-1; i++) {
		printf("%d, ", permutation[i]);
	}
	printf("%d]\n", permutation[n-1]);
}
