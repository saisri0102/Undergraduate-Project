// overloads -> function signatures (allowed ways to call the function)
// each signature specifies a permissible combination of argument types
function sum( x : string, y : string ) : string;
function sum( x : number, y : number ) : number;

function sum( x : number | string, y : number | string ) {
    if( typeof x === 'number' && typeof y === 'number' ) {
        return x + y;
    }

    if( typeof x === 'string' && typeof y === 'string' ) {
        return x + ' ' + y;
    }
}

sum( 'hello', 'world' ); // hello world
// sum( 1, 'world' ); // error

export {}