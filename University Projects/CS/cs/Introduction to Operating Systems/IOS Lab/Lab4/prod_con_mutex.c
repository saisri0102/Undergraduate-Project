#include<stdio.h>
#include<stdlib.h>
#include<pthread.h>
#define SIZE 5

void* consumer();
void* producer();

pthread_mutex_t mutex = PTHREAD_MUTEX_INITIALIZER;
pthread_cond_t pCheck = PTHREAD_COND_INITIALIZER;
pthread_cond_t cCheck = PTHREAD_COND_INITIALIZER; //pCheck : Produce can be called, cCheck consume can be called
int buffer[SIZE];
int counter = 0;
int main(){
	pthread_t stuff[2];
	pthread_create(&(stuff[0]),NULL,(void*)producer,NULL);
	pthread_create(&(stuff[1]),NULL,(void*)consumer,NULL);
	pthread_join(stuff[0],NULL);
	pthread_join(stuff[1],NULL); 


}

void* producer(){
	printf("HERE\n");
	while(1){
		pthread_mutex_lock(&mutex);
		if(counter == SIZE){
			pthread_cond_wait(&pCheck, &mutex);
		}
		buffer[counter] = counter;
		printf("Produced : %d\n",counter);
		counter++;
		pthread_cond_signal(&cCheck);
		pthread_mutex_unlock(&mutex);
	}
}
void* consumer(){
	printf("HERE\n");
	while(1){
		pthread_mutex_lock(&mutex);
		if(counter == 0){
			pthread_cond_wait(&cCheck, &mutex);
		}
		printf("Consumed : %d\n", buffer[counter]);
		counter--;
		pthread_cond_signal(&pCheck);
		pthread_mutex_unlock(&mutex);
	}
}
