

function sum(x,y){
    return x+y;
}

// let , const do not allow redeclartion - so using var in this example
var sum= function(x,y){
    return x*x + y*y;
}

function multiply(x,y){
    multiply= function(x,y){
        return x*x + y*y;
    };
    return x*y;
}

console.log('Sum:', sum(2,3)); // 13
console.log('Multiply: ', multiply(2,3)); // 6 (2*3)
console.log('Multiply: ', multiply(2,3)); // 13 (2*2+ 3*3)
console.log('Multiply: ', multiply(2,3)); // 13 (2*2+ 3*3)

console.log(sum(2,3)); // 13