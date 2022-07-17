#include <stdio.h>
// file structure:
// string, int
// find the highest

// strategy 1: read character by character
int main()
{
	FILE *fp;
	char ch;
	char name[100];
	int votes = 0;
	int i = 0;
	int in_name = 1;
	fp = fopen("votes.csv", "r"); 
	while((ch = getc(fp)) != EOF)
	{
		if(ch == ',')
		{
			in_name = 0;
			name[i] = '\0';
		}
		else if(ch == '\n')
		{
			printf("name: %s votes: %d\n", name, votes);
			in_name = 1;
			votes = 0;
			i = 0;
		}
		else if(in_name)
		{
			name[i++] = ch;
		}
		else if(ch >= '0' && ch <= '9')
		{
			votes = votes * 10 + (ch - '0');
		}
		
	}
	fclose(fp);
}

