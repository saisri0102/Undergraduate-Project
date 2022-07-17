
// A function is an object in JS
// A function is created by a constrcutor  function called function
function sum(x,y){
    return x+y;
}

const sum2= new Function('x','y','return x+y;');
console.log(sum2(12,13));