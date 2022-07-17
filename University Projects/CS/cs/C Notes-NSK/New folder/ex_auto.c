// variable has
//	a name
//	a location
//	a type
//	a value 
//	storage class
//	qualifier
//	life
//	scope

// We shall discuss the concept storage class along with other aspects
// storage class:
//	global
//	static
//	auto
//	register

// auto :
//	stands for automatic
//	is the default variables created within a block
//	created on entry to the block
//	removed on exit from the block
//	created on stack 
//	variables can be of any type
//	are not initialized by default
//	life time : during the execution of the block
//	scope : during the execution of the block
//		accessible in the inner blocks as long as there is no clash of names
//		there is no scope resolution operator
//		holding a  pointer to an automatic variable after its life ends causes dangling pointer
// note: auto keyword has totally different meaning in C++ 11

#include <stdio.h>
int main()
{
	auto int a = 10; auto int b; // b not initialized
	auto int* p;
	b = 20;
	{
		auto int a = 30; // automatic or local variable of the inner block
		// a of the outer block can never be accessed within the inner block
		printf("%d %d\n", a, b); // 30 20
		p = &a; // ok at this point; p becomes dangling once the block is exited
	}
}


