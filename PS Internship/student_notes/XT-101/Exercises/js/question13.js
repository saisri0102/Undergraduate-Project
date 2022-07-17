function contains(array, num){
    let result= false;
  for(let i=0;i<array.length;i++){
      
     if(array[i]===num){
         result= true;
         break;
     }
  }
  return result;
}

console.log(contains([1,2,3,4],3));
console.log(contains([1,2,3,4],5));