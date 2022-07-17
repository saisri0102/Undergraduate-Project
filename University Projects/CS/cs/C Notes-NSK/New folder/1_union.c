#include <stdio.h>
#include <stddef.h>
// union:
//	have # of fields - similar to a structure
//  at a given point in time, only one can exist
//  all the fields overlap
//  they have the same offset : 0
// size of a union : size of the biggest component
//  - memory management technique
//		allow variables to occupy the same memory
//		fine as long as all these variables do not have to exist simultaneously
//  - flexibility

struct X
{
	int a;	
	int b;
};

union Y
{
	int a;	
	int b;
};

union Z
{
	double a;
	int b;
};
// examples of union
// register : 32 bit
//            or two 16 bit 
union regs
{
	int AX;
	struct  
	{
		short AL;
		short AH;
	} A;
};
// interprocess communication
// man semctl
// union semun { }
// flexibility : pass the same argument 
// based on an argument called command, we make out what the union contains

int main()
{
	printf("posn of b in struct : %lu\n", offsetof(struct X, b));
	printf("posn of b in union : %lu\n", offsetof(union Y, b));

	struct X x;
	x.a = 111; printf("struct b : %d\n", x.b); // undefined
	union Y y;
	y.a = 111; printf("union b : %d\n", y.b); // 111

	// cannot make out which field of the union is in use currently
	// concept : free union
	// may require a variable outside the union to make out which field of the union is active
	//	discriminator
	union Z z;
	z.a = 3.14; printf("a : %lf\n", z.a);
	z.b = 123; printf("b : %d\n", z.b);

	union regs r;
	r.AX = 0x12345678;
	printf("%x %x %x\n", r.AX, r.A.AH, r.A.AL);
}



















