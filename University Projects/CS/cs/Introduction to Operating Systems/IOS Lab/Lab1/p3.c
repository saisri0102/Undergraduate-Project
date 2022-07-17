#include<stdio.h>
#include<unistd.h>
#include<sys/wait.h>
#include<sys/types.h>
#include<stdlib.h>
int main(int argc, char* argv[])
{
	pid_t p1,p2;
	int status;
	int res1;
	p1 = fork();
	if( p1 < 0)
		fprintf(stderr,"Fork failed");
	else if(p1 == 0)
	{
		int answer;
		int res;
		p2 = fork();
		if(p2 < 0)
			fprintf(stderr,"Fork failed");
		else if(p2 == 0)
		{
			int a,b;
			a = atoi(argv[1]);
			printf("a %d\n",a);
			b = atoi(argv[2]);
			printf("b %d\n",b);
			answer = a+b;
			printf("Value in p3 %d\n",answer);
			exit(answer); 	
		}
		else
		{
			wait(&answer);
			int s = WEXITSTATUS(answer);
			status = 2 * s;
			printf("Value in p2 %d\n",status);
			exit(status);
		}	
	}
	else
	{
		wait(&status);
		int s = WEXITSTATUS(status);
		printf("Vvalue in p1 %d\n",s);
	}
}
