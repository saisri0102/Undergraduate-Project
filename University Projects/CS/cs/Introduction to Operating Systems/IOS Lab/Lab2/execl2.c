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
		execl(argv[1],argv[2],NULL);
	}
	else
	{
		wait(NULL);
	}
	return 0;
}
