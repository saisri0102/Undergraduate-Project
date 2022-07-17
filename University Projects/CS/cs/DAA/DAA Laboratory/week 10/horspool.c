#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<ctype.h>
#include<string.h>

int matching(char * string, char * pattern);

int main()
{
	char *s= (char*)malloc(sizeof(char)* 1000000);
	char *p= (char*)malloc(sizeof(char)* 100);
	struct timespec start, end;
	int b;

	scanf(" %[^\n]", s);
	scanf(" %[^\n]", p);

	clock_gettime(CLOCK_REALTIME, &start);
	b =  matching(s,p) ;
	clock_gettime(CLOCK_REALTIME, &end);
	
	if (b !=-1)
		printf("Found at: %d",b);
	else 
		printf("NOT FOUND");
	printf("\n");
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	free(s);
	return 0;
}

int matching(char * string, char * pattern)
{
	int lens = strlen(string);
	int lenp= strlen(pattern);
	int st[26];
	for (int i=0; i < 26; i++)
	{
		st[i] = lenp;
	}
	for (int j=0; j<lenp-1; j++)
	{
		st[toupper(pattern[j])-65] = lenp-1-j;
	}
	int i=0, j;
	while (i<= lens-lenp)
	{
		//printf("%d ", i);
		j = lenp-1;
		while (j>=0 && toupper(pattern[j]) == toupper(string[i+j]))
			j = j-1;
		//printf("%d ", j);
		if (j == -1)
			return i;
		else
		{
			//printf("%c %d",toupper(string[i+lenp-1]) , st[toupper(string[i+lenp-1])-65])
			if (isalpha(string[i+lenp-1]))
				i = i + st[toupper(string[i+lenp-1])-65];
			else i = i+ lenp;
		}
		
	}		
	return -1;	
}
