
// when we enclose function within () it is treated as function expression 
// Self Invoking function - A function is invoked automatically without being called. 
// Function Expressions will execute automatically if the exprssion is followed by ()
// we cannot self invoke a function declaration
// We have to add parentheses around the function to indicate that it is a function expression

// Normal function 
function sum(x,y){  // function declaration
    
    return x+y;
}

// self invoking function just declaration
(
    function multiply(x,y){  // function expression it is just defining
        console.log('Multiply is called ')
        return x*y;  // wont return anything 
    }
)(2,3);

// self invoking function with declaration and initialization 
// result in not function it is value of (x/y)
let result= ( function divide(x,y){  // function expression 
        console.log('Divide is called ') // defining, initialization 
        return x/y;  
    }
)(10,5);

console.log(result);

// result2 is a function 
let result2= ( function divide2(x,y){  
    console.log('Divide is called ') 
    return x/y;  
}
);

console.log(result2(20,5));
//console.log(divide2(20,5)); // error divide is not defined


