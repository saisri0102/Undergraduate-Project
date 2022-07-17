
#include<stdio.h>
#include<semaphore.h>
#include<pthread.h>
 
#define num 5
#define THINKING 0
#define HUNGRY 1
#define EATING 2
 
sem_t mutex;
sem_t S[num];
 
void * philospher(void *p_no);
void take_fork(int);
void put_fork(int);
void test(int);
 
int state[num];
int phil_num[num]={0,1,2,3,4};
 
int main()
{
    int i;
    pthread_t thread_id[num];
    sem_init(&mutex,0,1);
    for(i=0;i<num;i++)
        sem_init(&S[i],0,0);
    for(i=0;i<num;i++)
    {
        pthread_create(&thread_id[i],NULL,philospher,&phil_num[i]);
        printf("Philosopher %d is thinking\n",i+1);
    }
    for(i=0;i<num;i++)
        pthread_join(thread_id[i],NULL);
}
 
void *philospher(void *p_no)
{
    while(1)
    {
        int *i = p_no;
        sleep(1);
        take_fork(*i);
        put_fork(*i);

    }
}
 
void take_fork(int p_id)
{
    sem_wait(&mutex);
    state[p_id] = HUNGRY;
    printf("Philosopher %d is Hungry\n",p_id+1);
    test(p_id);
    sem_post(&mutex);
    sem_wait(&S[p_id]);
}
 
void test(int p_id)
{
    if (state[p_id] == HUNGRY && state[(p_id+(num-1))%num] != EATING && state[(p_id+1)%num] != EATING)
    {
        state[p_id] = EATING;
        printf("Philosopher %d picked up fork %d and %d\n",p_id+1,((p_id+(num-1))%num)+1,p_id+1);
        printf("Philosopher %d is Eating\n",p_id+1);
        sem_post(&S[p_id]);
		sleep(1);
    }
}
 
void put_fork(int p_id)
{
    sem_wait(&mutex);
    state[p_id] = THINKING;
    sleep(2);
    printf("Philosopher %d put down fork %d and %d\n",p_id+1,((p_id+(num-1))%num)+1,p_id+1);
    printf("Philosopher %d is Thinking\n",p_id+1);
    test((p_id+(num-1))%num);
    test((p_id+1)%num);
    sem_post(&mutex);
}
