#include<stdio.h>
#include <sys/types.h>
#include <unistd.h>
 
int main()
{
    int pid1 = fork();
 
    if (pid1 > 0)
    {
        printf("Parent");
        sleep(3);
    }
 
   
    else if (pid1 == 0)
    {    
    	printf("PARENT BEFORE ORPHAN: %d",getppid());
        sleep(30);
        printf("Child");
        printf("PARENT AFTER ORPHAN: %d",getppid());
    }
 
    return 0;
}
