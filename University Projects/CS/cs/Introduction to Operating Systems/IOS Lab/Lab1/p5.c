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
		execl("/bin/date","date",NULL);
	}
	else
	{
		wait(NULL);
		printf("\nEnd of parent\n");
	}
	return 0;
}
