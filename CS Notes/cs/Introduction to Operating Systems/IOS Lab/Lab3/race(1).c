#include<stdio.h>
#include<string.h>
#include<pthread.h>
#include<stdlib.h>
#include<unistd.h>

int count = 10;
pthread_t t1,t2;

void * increment()
{
	++count;
	printf("Incremented: %d\n", count);
	pthread_exit(&t1);
}

void *decrement()
{
	--count;
	printf("Decremented: %d\n", count);
	pthread_exit(&t2);
}

int main()
{
for (int i =0; i< 5; i++)
{
	pthread_create(&t1,NULL,&increment,NULL);
	pthread_create(&t2,NULL,&decrement,NULL);
}

pthread_join(t1, t2); 
}


