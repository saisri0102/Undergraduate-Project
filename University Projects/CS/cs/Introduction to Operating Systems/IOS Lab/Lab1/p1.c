#include<stdio.h>
#include<unistd.h>


int main()
{
	pid_t p1, p2, p3, p4;
	printf("Hello\n");
	p1 = fork();
	p2 = fork();
	p3 = fork();
	//p4 = fork();
	printf("World!\n"); 
}
