#ifndef UTIL_H
#define UTIL_H
void mymap(int a[], int b[], int n, int (*op)(int));
void myfilter(int a[], int b[], int n, int* ptr_m, int (*op)(int));
int myreduce(int a[], int n, int (*op)(int, int));

// return an int
int mysearch(int a[], int n, int elem);
int mysearch_predicate(int a[], int n, int (*op)(int));
#endif
