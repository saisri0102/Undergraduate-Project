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
int main()
{
	char *path;
	char mypath[1000];
	path = getenv("PATH");
	printf("path : %s\n", path);

	system("hello"); // Error

	strcpy(mypath, path);
	strcat(mypath, ":.");
	setenv("PATH", mypath, 1);

	system("hello"); // NO Error

	 
	printf("end\n");
}
