#include<stdio.h>
#include<unistd.h>
#include<sys/wait.h>
#include<sys/types.h>
#include<stdlib.h>
int main(int argc, char* argv[])
{
	pid_t p1;
	p1 = fork();
	if(p1 == 0)
	{
		int no = atoi(argv[1]);
		int sum = 0;
		int a = 0, b = 1;
		printf("%d\n%d\n",a,b);
		for(int i = 2; i < no; i++)
		{
			sum = a + b;
			printf("%d\n",sum);
			a = b;
			b = sum; 
		}
		printf("\nEnd of child\n");
	}
	else
	{
		wait(NULL);
		printf("\nEnd of parent\n");
	}
	return 0;
}
