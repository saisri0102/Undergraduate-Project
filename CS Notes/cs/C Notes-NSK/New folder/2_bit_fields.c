#include <stdio.h>
// bit fields
//	allow for storing small integer values in named locations
//  allow # of small integers to be put in a word
//  optimize on space for small integers
//  flexibility with names

// syntactically , similar to structure
struct myfields
{
	unsigned int a : 4;
	unsigned int b : 5; 
	unsigned int c : 25;
};
int main()
{
	struct myfields f;
	f.a = 5; // 0101 
	f.b = 9; // 01001
	printf("%d %d\n", f.a, f.b);

	//printf("addr a : %p\n", &f.a);

	printf("size : %lu\n", sizeof(f));
}
// each of the fields will occupy part of an int
// cannot apply address operator on these fields
// overflow of a field : result gets truncated







