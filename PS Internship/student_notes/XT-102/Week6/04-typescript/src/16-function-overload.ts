
// overloads -> function signatures (allowed ways to call the function)
//each signature specifies the various allowed combinations
function sum(x :string, y:string) :string;
function sum(x : number , y: number ) : number;

function sum(x : number | string,y : number | string)
{
    if(typeof x === 'number' && typeof y=== 'number'){
        return x+y;
    }
    if(typeof x === 'string'  && typeof y === 'string'){
        return x+ ' '+y;
    }
}
sum('hello', 'world');

// ERROR
// sum(1, 'world');