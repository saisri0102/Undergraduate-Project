function a(){
    return function(){ // we can return function 
        console.log('I am anonymous function returned from a ');
    }
}
a()();


function r(z){

    const john={  // local variable
        name:'john'
    }

    function p(){  // we cannot access this function outside it is local function 
        console.log(' i am p');
       
    }
   
   // return john; // yes we can return objects
    return p; // yes - we can return objects - therefore functions 
}
 
// p()  // error  it is local of p 
console.log(r); // [Function: r]

const z= r();  // z=p;
console.log(z);  // [Function: p]


z(); // prints "i am p"