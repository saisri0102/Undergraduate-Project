#include<stdio.h>
#include<unistd.h>
#include<sys/wait.h>
#include<sys/types.h>
int main()
{
	pid_t p1;
	int arr[] = {10,20,30,40,50};
	p1 = fork();
	if(p1 == 0)
	{
		int sum = 0;
		for(int i = 0; i < 5; i++)
		{
			sum += arr[i];
			arr[i] = sum;
		}
		for(int i = 0; i < 5; i++)
		{
			printf("%d\t",arr[i]);
		} 
		printf("\nEnd of child\n");
	}
	else
	{
		wait(NULL);
		int prod = 1;
		for(int i = 0; i < 5; i++)
		{
			prod *= arr[i];
			arr[i] = prod;
		}
		for(int i = 0; i < 5; i++)
		{
			printf("%d\t",arr[i]);
		} 
		printf("\nEnd of parent\n");
	}
	return 0;
}
