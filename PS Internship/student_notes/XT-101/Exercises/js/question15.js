function sum(x,y, transform){
   return transform(x)+ transform(y);
   
   
}

function square(z){
  return z*z;
}

function cube(z){
    return z*z*z;
}


let result= sum(2,3,square);
console.log(result);

let result2= sum(2,3,cube);
console.log(result2);

let result3= sum(2,3,Math.log)
console.log(result3);