#include<stdio.h>
#include <sys/types.h>
#include <unistd.h>
 
int main()
{
    int pid1 = fork();
 
    if (pid1 > 0)
    {
    	sleep(30);
        printf("Parent");
    }
 
   
    else if (pid1 == 0)
    {
        printf("Child");
    }
 
    return 0;
}
