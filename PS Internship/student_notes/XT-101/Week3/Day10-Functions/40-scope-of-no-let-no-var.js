
// enable strict mode of execution

// 'use strict' - using this it will report error if keyword var, let is not used 
'use-strict' // global scope

x=1; // global variable
// if var and let is not given then that variable is consider as global space




console.log('x (global space) =', x);

function outer(){

    'use-strict' // function scope

    y=2;  // global variable

    console.log('x (outer function space) =', x);
    console.log('y (outer function space) =', y);
    
    if(true){

        z=3;  // // global variable
        console.log('x (block space)= ', x);
        console.log('y (block space)= ', y);
        console.log('z (block space)= ', z);

        function inner1(){
            console.log('x (inner1 function space)= ', x);
            console.log('y (inner1 function space)= ', y);
             console.log('z (inner1 function space)= ', z); 
        }
    }
     console.log('z (outer function space) =', z); // no error

    function inner(){
        console.log('x (inner function space)= ', x);
        console.log('y (inner function space)= ', y);
        console.log('z (inner function space)= ', z); 
    }

    inner();

}

outer();

console.log(' y(global space)= ', y) // no error
console.log(' z(global space)= ', z) //no  error

