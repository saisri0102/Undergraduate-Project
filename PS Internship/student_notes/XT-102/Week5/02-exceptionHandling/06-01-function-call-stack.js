// When an error occurs the "function call stack" (fstack) is cleared
// "Stack" -> don't function calls behave like that?

function c() {
    console.log( 'c executing and printed using console.log' );
}

function b() {
    c();
}

function a() {
    b();
}

a();

/**
 * | b | <- Top
 * | a |
 * |_Global context__|
 * 
 * 0. Global context is set up in the stack
 * 1. Function a is pushed to fstack
 * 2. a Starts executing
 * 3. Function b is pushed to the stack
 * 4. b Starts executing
 * 5. Function c is pushed to the stack
 * 6. c Starts executing
 * 7. Function console.log is pushed to the stack
 * 8. console.log Starts executing
 * 9. console.log is popped out of the stack
 * 10. c restarts execution from the same line where it left off
 * 11. c finishes execution
 * 12. c is popped off the stack
 * 13. b starts executing from the line where where it left off
 * 
 * 
 * 
 * ...all code is done -> fstack is empty
 */