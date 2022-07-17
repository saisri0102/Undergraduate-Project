var x=1; // global variable

console.log('x (global space) =', x);

function outer(){

    var y=2;

    console.log('x (outer function space) =', x);
    console.log('y (outer function space) =', y);
    
    if(true){

        var z=3;  // Var variables do not have block scope but it have function scope
        console.log('x (block space)= ', x);
        console.log('y (block space)= ', y);
        console.log('z (block space)= ', z);

        function inner1(){
            console.log('x (inner1 function space)= ', x);
            console.log('y (inner1 function space)= ', y);
             console.log('z (inner1 function space)= ', z); 
        }
    }
     console.log('z (outer function space) =', z); // not error z is function scope

    function inner(){
        console.log('x (inner function space)= ', x);
        console.log('y (inner function space)= ', y);
        console.log('z (inner function space)= ', z); 
    }

    inner();

}

outer();
// error
// console.log(' y(global space)= ', y) // error
// console.log(' z(global space)= ', z) // error

