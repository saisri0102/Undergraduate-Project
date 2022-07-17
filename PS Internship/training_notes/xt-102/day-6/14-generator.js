// A function to generate a sequence
// Functions that can be paused and resumed
function *foo() {
    let counter = 1;
    
    console.log( 'counter = ', counter );
    counter++;
    
    let input;
    input = yield 1; // temporarily return 1;
    
    console.log( 'input = ', input );
    console.log( 'counter = ', counter );
    counter++;
    
    yield 2;

    console.log( 'counter = ', counter );
    counter++;

    yield 3;

    console.log( 'counter = ', counter );
    counter++;

    yield 4;

    console.log( 'counter = ', counter );
    counter++;
}

// does not call the function
const iter = foo(); // returns an iterator (roughly speaking)

let result;

result = iter.next();
console.log( 'result = ', result );

result = iter.next( 'hello' );
console.log( 'result = ', result );