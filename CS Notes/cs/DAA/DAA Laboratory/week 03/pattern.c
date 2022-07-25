#include<stdio.h>
#include<stdlib.h>
#include<time.h>
#include<string.h>

void matching(char * string, char * pattern);

int main()
{
	char *s= (char*)malloc(sizeof(char)* 1000000);
	char *p= (char*)malloc(sizeof(char)* 100);
	struct timespec start, end;

	scanf(" %[^\n]", s);
	scanf(" %[^\n]", p);

	clock_gettime(CLOCK_REALTIME, &start);
	matching(s,p) ;
	clock_gettime(CLOCK_REALTIME, &end);
	
	printf("Start: %ld : %ld\t End: %ld : %ld\n", start.tv_sec, start.tv_nsec, end.tv_sec, end.tv_nsec);	
	printf("Difference %ld seconds, %ld nanoseconds\n", end.tv_sec- start.tv_sec,  end.tv_nsec- start.tv_nsec);
	free(s);
	return 0;
}

void matching(char * string, char * pattern)
{
	int lens = strlen(string);
	int lenp= strlen(pattern);
	int j;
	for(int i =0 ; i <= lens- lenp; i++)
	{
		j=0;
		while( j<lenp && pattern[j] == string[i+j])
			j = j+1;
			if (j == lenp)
				printf("FOUND AT %d ", i);
		
	}
}
