#include <stdio.h>
// read a file which has
// line 1:  # of numbers
// line 2: so many numbers

void disp(int* x, int n)
{
	for(int i = 0; i < n; ++i)
	{
		printf("%d\t", x[i]);
	}
	printf("\n");
}
int main()
{
	FILE *fp;
	fp = fopen("numbers2.dat", "r"); 
	int n; 
	fscanf(fp, "%d", &n);
	int a[n];
	for(int i = 0; i < n; ++i)
	{
		fscanf(fp, "%d", &a[i]);
	}
	disp(a, n);
	fclose(fp);  
}
