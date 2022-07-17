// Functions are first class citizens
// Functions can be used wherever objects can be used
// Basically, first-class citizenship simply means “being able to do what everyone else can do.” In JavaScript, functions are objects (hence the designation of first-class object). 
//They inherit from the Object prototype and they can be assigned key: value pairs.
function f(x){
    console.log(' i am f');
    console.log('x=',x); // 

    if(typeof x== 'function'){
        console.dir(x());
        // x(); // Prints i am g
    }
    else{
        console.log(x);
    }
}
function g(){
    console.log(' i am g');
   
}

function h(){
    console.log(' i am h');
   
}
const john={
    name:'john'
}

f(john); // x=john we can pass object as function argument

f(g); // x=g // x and g refer to the same function in memory

f(h); // x=h

f(
    function(){
      console.log(' I am anonymous function');
    }
)

