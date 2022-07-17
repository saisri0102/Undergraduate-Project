#include <stdio.h>
#include <stdlib.h>
#include <string.h>
int main()
{
	char cmd[80];
	scanf("%[^\n]s", cmd);getchar();
	while(strcmp(cmd, "over") != 0)
	{
		system(cmd);
		scanf("%[^\n]s", cmd);getchar();
	}
}
