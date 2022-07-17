// we want to share x everywhere in this script
// x should be access everywhere but we dont want any  global variable . How??
// using self invoking function. i.e use an immediately Invoked Function Expression (IIFE- 'iffy') 

// 3 global variables  (x, f, g)

'use strict'
let x=1;

function f(){
    console.log(x);
}

function g(){
    console.log(y);
    console.log(x);
}

f();
g();

// One global variable  (init function)

function init(){
        let x=1;

    function f(){
        console.log(x);
    }

    function g(){
        console.log(y);
        console.log(x);
    }

    f();
    g();
}

init();

// Zero global variable or function , Application of self invoking function 

// Invoked everytime automaically when it is runned
(function init(){ // function name is not important we can write function () also 
    let x=1;

    function f(){
        console.log(x);
    }

    function g(){
        console.log(y);
        console.log(x);
    }

    f();
    g();

})();
