#include<semaphore.h>
#include<stdio.h>
#include<unistd.h>
#include<sys/sem.h>
#include<stdlib.h>
#include<pthread.h>
#define MAX1 5

int cnt = 0;
pthread_t t1,t2;
sem_t empty;
sem_t full;
sem_t mutex;
int buffer [MAX1];

void *producer()
{
	for (int i =0; i<20; i++)
	{
		sem_wait(&empty);
		sem_wait(&mutex);
		buffer[cnt] = i;
		printf("\nPRODUCED %d\n",cnt);
		cnt+=1;
		sem_post(&mutex);
		sem_post(&full);
	}
}

void *consumer()
{
	for (int i =0; i<20; i++)
	{
		sem_wait(&full);
		sem_wait(&mutex);
		int temp = buffer[cnt];
		cnt -= 1;
		printf("\nCONSUMED %d\n",cnt);
		sem_post(&mutex);
		sem_post(&empty);
	}
}

int main()
{
	sem_init(&empty , 0, MAX1);
	sem_init(&full, 0,0);
	sem_init(&mutex,0,1);
	pthread_create(&t1,NULL,&producer,NULL);
	pthread_create(&t2,NULL,&consumer,NULL);
	pthread_join(t2, t1);
}
