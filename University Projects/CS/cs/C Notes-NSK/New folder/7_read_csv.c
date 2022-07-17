#include <stdio.h>
#include <string.h>
// file structure:
// string, int
// find the highest

// strategy 2: read characters together; use strtok to break; may use atoi to convert str to int
int main()
{
	FILE *fp;
	char ch;
	char name[100];
	int votes;
	const int SIZE = 200;
	char buffer[SIZE];
	fp = fopen("votes.csv", "r"); 
	while(! feof(fp) )
	{
		fgets(buffer, SIZE - 1, fp);
		printf("buffer : %s\n", buffer);
		char *p = strtok(buffer, ",");
		printf("name: %s\n", p);
		while( (p = strtok(NULL, ",")) != NULL)
		{
			printf("votes: %s\n", p);
		}
	}
	fclose(fp);
}

