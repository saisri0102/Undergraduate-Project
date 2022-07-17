let x=1; // global variable

// let and const variable have exact same rules with respect to scoping

console.log('x (global space) =', x);

function outer(){

    let y=2;

    console.log('x (outer function space) =', x);
    console.log('x (outer function space) =', y);

    if(true){

        let z=3;
        console.log('x (block space)= ', x);
        console.log('y (block space)= ', y);
        console.log('z (block space)= ', z);

        function inner1(){
            console.log('x (inner1 function space)= ', x);
            console.log('y (inner1 function space)= ', y);
             console.log('z (inner1 function space)= ', z); 
        }
    }
    // console.log('z (outer function space) =', z); // error

    function inner(){
        console.log('x (inner function space)= ', x);
        console.log('y (inner function space)= ', y);
        // console.log('z (inner function space)= ', z); // error
    }

    inner();

}

outer();
// error
// console.log(' y(global space)= ', y) // error

