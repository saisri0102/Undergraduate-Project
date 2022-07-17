// files:
//	variables of the programs die at the end of the program
//  - use files to persist data even after the program exits
//	- size not limited by the virtual address space of the process
//  - data created by one program may be used by the other
//	- data could be structured or unstructured
//	- a program in C is data for a compiler
//	- stdin and stdout are also logical files

#include <stdio.h>

int main()
{
	// fopen : connects physical filename with a logical filename
	// physical filename : name as in the OS
	// logical filename in C is a pointer to a opaque type : FILE; is an identifier
	// mode : we open the file for reading or writing or appending ...

	// check man pages for fopen, fclose
	FILE *fp;
	#if 0
	//fp = fopen("junk.dat", "r"); // no default mode ; 
	printf("fp ? %d\n", fp == NULL); // 1
	fclose(fp); // crashing; closing an unopened file
	#endif
	fp = fopen("1_intro.c", "r"); // acquire resources
	printf("fp %p\n", fp);  
	fclose(fp);  // release resources


}
