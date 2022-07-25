#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <unistd.h>
#include <sys/types.h>

int main(void)
{
        int     fd[2], nbytes,fd2[2];
        pid_t   childpid;
        char    string[] = "Hello, world!\n";
        char    readbuffer[80], result[80];

        pipe(fd);
        pipe(fd2);

        if((childpid = fork()) == -1)
        {
                perror("fork");
                exit(1);
        }

        if(childpid > 0)
        {
                /* Child process closes up input side of pipe */
                close(fd[0]);

                /* Send "string" through the output side of pipe */
                write(fd[1], string, (strlen(string)+1));
                close(fd2[1]);

                /* Read in a string from the pipe */
                nbytes = read(fd2[0], result, sizeof(result));
                printf("Received string2: %s", result);
                exit(0);
        }
        else if (childpid == 0)
        {
                close(fd[1]);

                nbytes = read(fd[0], readbuffer, sizeof(readbuffer));
                printf("Received string1: %s", readbuffer);
                
                for(int index=0; readbuffer[index] != '\0'; index++)
        			readbuffer[index] = toupper(readbuffer[index]);
        			
        		//printf("Received string1: %s", readbuffer);
        		//printf("%d",strlen(readbuffer));
        		close(fd2[0]);
        		write(fd2[1], readbuffer, (strlen(readbuffer)+1));	
        }

        return(0);
}
