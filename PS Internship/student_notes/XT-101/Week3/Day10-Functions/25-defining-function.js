// Function Declaration
// Dont give keywords like var, let inside function arguments

/**
 * "function declaration function can be used before declaration also "
 * "function expression and arrow function " functions cannot be accessed before initialization 
 */

const result6= sum1(12,13);
 console.log('result6= ', result6);  // It works

function sum1(x, y){  // function functionname(arguments){ Body}
    let result;

    result= x+y;

    return result; // Returning 
}

const result= sum1(12,13);
console.log('result= ', result); 

// Function expression syntax Function is treated as expression and No need to give the name
// RHS is called a function expression 
// Function expression can be named or unnamed(anonymus)

//  const result5= sum2(12,13)
//  console.log('result5= ', result5); // Not works Error: Cannot access 'sum2' before initialization

let sum2=  function(x,y){ // Sum2 becomes name of the function x,y are local to the function
    return x+y;
};

const result2= sum2(12,13)
console.log('result2= ', result2);

// arrow function syntax

const result4= sum3(12,13)   
console.log('result4= ', result4);  // Doesn't work

let sum3 = (x, y) => {
    return x+y;
};
const result3= sum3(12,13)
console.log('result3= ', result3);