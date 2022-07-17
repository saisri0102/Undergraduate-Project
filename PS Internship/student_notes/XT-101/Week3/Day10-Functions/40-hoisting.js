
 /**
  * In JavaScript, a variable can be declared after it has been used.
 * In other words; a variable can be used before it has been declared.
 * Hoisting is JavaScript's default behavior of moving all declarations to the top of the current scope 
 * (to the top of the current script or the current function).
 * We cannot use let and const variable without declaration it will throw error
 * But var variables can be declared after the intialization because by default var variables are hoisted (raised to the top)
 * The declaration is processed at the start of function execution (“hoisted”), 
 * but the assignment always works at the place where it appears.
 *  this means that no matter where functions and variables are declared, they are moved to the top of their scope regardless 
 * of whether their scope is global or local
*/


/**
 * So basically var variables are by default hoisted ( raised to the top). 
 * i.e var declarations are processed at function start (
 * So, it wont be a problem if we initialized the variable before the declaration
 * But it is not same for const, let . It is manidatory to declare before initialization
 * We can declare var variables twice but not let 
 * Var is functional scope and let is block scope
 */


x=5; // Initialization
 y =6; // ReferenceError: Cannot access 'y' before initialization
console.log(x);
function outer(){
    
    console.log(x);
    if(true){
        y=6;
        console.log(y);
    }
}

outer();
console.log(y);
var x; // declaration
let y;
outer();