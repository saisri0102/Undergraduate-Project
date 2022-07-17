// SYNTAX 1

// function declaration suntax
function divide(dividend: number, divisor: number) : number | string{
    if(divisor!==0){
        return dividend/divisor;
    }else{
        //throw new Error(' divisor should be non -zero');
        return 'You cannot have 0 as divisor';
    }
}  

// function expression syntax
const sum1 = function (x:number ,y : number){
    return x+y;
}

// arrow function syntax
const sum2 = (x:number ,y : number) => x+y;

// SYNTAX 2 (Not applicable for function declaration )

// here type is given as left side of the assignment

type BinaryFunction = (x: number, y:number) => number;

const multiply1 : (x: number, y:number) => number = function(x,y){
    return x*y;
}

const multiply2 : BinaryFunction = function(x,y){
    return x*y;
}

const multiply3 : BinaryFunction = (x,y) => x+y;

function sumAsync(x : number , y : number , cb : (result : number) => void){
    setTimeout(() => cb(x+y), 3000);
}

sumAsync(12, 13, result => console.log(result));

console.log(divide(10,2));

export{}
 