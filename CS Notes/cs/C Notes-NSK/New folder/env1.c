#include <stdio.h>
#include <stdlib.h>
#include <string.h>
// environment:
//	OS provides an environment in which the programs work.
//	Examples:
//	prompt, present working directory, ...
//	$ env
//	Each entry is a key value pair - both are strings
//	We can access or modify(create) these using getenv and setenv functions.
//	This feature is OS dependent
//	example:
//	PATH 
//	The value is a sequence of directory names separated by : in unix and ; in microsoft windows
//	When we execute a program, the image should be in one of the directories.
//  The program below shows how to modify the PATH have . (current directory) as one of the components.
//	Now we can execute the programs without prefixing ./
// Also note that this change does not affect the program or the shell running this.

// we do not directly play with this variable.
// We prefer to use the interface getenv and setenv.
// Looping is interesting. Write a diagram to check how it works.
extern char** environ;
int main()
{
	char **p = environ;
	while(*p != NULL)
	{
		printf("%s\n", *p);
		p++;
		
	}	
}
