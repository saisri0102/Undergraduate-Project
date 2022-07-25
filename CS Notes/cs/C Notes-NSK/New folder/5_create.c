#include <stdio.h>
// read a file which has a line of numbers - count not specified
// max say 100

void disp(int* x, int n)
{
	for(int i = 0; i < n; ++i)
	{
		printf("%d\t", x[i]);
	}
	printf("\n");
}

void sort(int a[], int n)
{
	int i; int j;
	for(i = 0; i < n - 1; ++i)
	{
		for(j = i + 1; j < n; ++j)
		{
			if(a[j] < a[i])
			{
				int temp = a[i]; a[i] = a[j]; a[j] = temp;
			}
		}
	}
}
int main()
{
	FILE *fp;
	fp = fopen("numbers3.dat", "r"); 
	int n = 0; 
	const int MAX = 100;
	int a[MAX];
	fscanf(fp, "%d", &a[n]);
	while( ! feof(fp) )
	{
		++n;
		fscanf(fp, "%d", &a[n]);
	}
	fclose(fp); 

	sort(a, n);
	FILE *fpout;
	fpout = fopen("sorted3.dat", "w");
	for(int i = 0; i < n; ++i)
	{
		fprintf(fpout, "%d\t", a[i]);
	}
	fprintf(fpout, "\n");
	fclose(fpout);
	 
}
