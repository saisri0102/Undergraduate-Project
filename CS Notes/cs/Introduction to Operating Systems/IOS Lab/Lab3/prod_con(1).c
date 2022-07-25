#include<stdio.h>
#include<string.h>
#include<pthread.h>
#include<stdlib.h>
#include<unistd.h>
#define maxx 5

int elements[maxx];
int current = 0;
pthread_t t1,t2;

void * producer()
{
	if (current == maxx-1)
		pthread_exit(&t1);
	else 
	{
		elements[current] = 5;
		current += 1;
	}
	
	printf("\nin producer\n");
	printf("here: %d", current);
	pthread_exit(&t1);

}

void *consumer()
{
	if (current == 0)
		pthread_exit(&t2);
	else 
	{
		elements[current] = 0;
		current -= 1;
	}
	printf("\nin consumer\n");
	printf("there: %d", current);
	pthread_exit(&t2);
}

int main()
{
for (int i =0; i< 10; i++)
{
	pthread_create(&t1,NULL,&producer,NULL);
	pthread_join(t1, NULL);
	pthread_create(&t2,NULL,&consumer,NULL);
	pthread_join(t2, NULL);
}

pthread_join(t1, t2); 
}


