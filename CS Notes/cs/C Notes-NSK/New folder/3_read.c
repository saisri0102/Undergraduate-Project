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
int main()
{
	FILE *fp;
	fp = fopen("numbers3.dat", "r"); 
	int n = 0; 
	const int MAX = 100;
	int a[MAX];
	// EOF : is an indication that the end of file has been reached; is a number
	while(fscanf(fp, "%d", &a[n]) != EOF)
	{
		++n;
	}
	disp(a, n);
	fclose(fp);  
}
