// callback function 

// A callback is a function passed into another function as an argument to be executed later i.e after completion of operation.
// hey browesr fetech the data . After feteching the date call this particular function 
// In JS we cannot execute more than one thing at a time. 
// callback : its called back when timer expires or completion of any other operation

function sum(x,y, callbackFn){
    setTimeout(function (){  // settimeout job is just to tell the  node js to execute the inside function after 3sec.  So,  Node js calls this inside function after 3sec.
        console.log(' I am callback function'); 
        callbackFn(x+y); // used instead of returning (returning to Node.js is useless)
    }, 3000);
   
    // return undefined immediately and dont wait for 3sec. 
    // Because sum function is not call back function . The function which is inside set timeout is callback function and it excutes after 3sec.
    
}

let result = sum(12,13);
console.log(result) // undefined



function cb1(result1){
    console.log(result1);  // 25
}

function cb2(result2){
    console.log(result2*result2) // 625
}

let result1 = sum(12,13,cb1);
let result2 = sum(12,13,cb2);
