#ifndef PERSON_H
#define PERSON_H
struct person
{
	char name[20];
	int age;
};
typedef struct person person_t;
void init(person_t* ptr_person, char* name, int age);
void disp(const person_t* ptr_person);
void disp_all(const person_t* x, int n);
int comp_name(const person_t* lhs, const person_t* rhs);
void myswap( person_t* lhs,  person_t* rhs);
void sort(person_t x[], int n, int (*comp)(const person_t*, const person_t*));

void init_ptr(person_t x[], person_t* p[], int n);
void disp_all_ptr( person_t* p[], int n);
void sort_using_ptr(person_t* p[], int n, int (*comp)(const person_t*, const person_t*));
void myswap_ptr(person_t **a, person_t **b);
#endif

