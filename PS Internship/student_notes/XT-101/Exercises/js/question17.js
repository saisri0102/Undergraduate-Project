function exponentFactory(x){

    if(x==2){
      return function square(y){
        return y*y;
    } 
    }
   else if(x==3){
     return function cube(y){
        return y*y*y;
    } 
   }
   else{
       return function value(y){
           return y;
       }
   }
 
 
}

var fn= exponentFactory(2);
console.log(fn);
console.log(fn(5));

var fn= exponentFactory(3);
console.log(fn);
console.log(fn(5));


var fn= exponentFactory(4);
console.log(fn);
console.log(fn(5));