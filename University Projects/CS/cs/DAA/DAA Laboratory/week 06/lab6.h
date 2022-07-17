#ifndef LAB6_H
#define LAB6_H
#include<stdio.h>
#include<stdlib.h>
#include<string.h>
#include<math.h>
#include<time.h>
char* allocate(int);
void init(char *,int);
void free_alloc(char *);
void split(char *,int ,char *,char *);
int convert_to_num(char *);
char * convert_to_arr(int );
char * Karatsuba(char *,char *,int);
char * add_large_num(char *,char *);
int check_power_two(int );
int length(char *);
char * reverse(char *);
void display(char *);
char * add_zero(char *);
char * get_result(char *,char *,char *,int);
char * remove_zero(char *);
char * make_equal(char *,int);
double time_taken(struct timespec *,struct timespec *);
char * difference(char*,char *);
int is_even(int);
#endif
