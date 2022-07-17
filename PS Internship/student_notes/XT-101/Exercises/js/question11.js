function sumArray(arguments){
    let sum=0;
  for(let i=0;i<arguments.length;i++){
      sum= sum+arguments[i];
  }
  return sum;
}

var result= sumArray([1,2,3,4]);
console.log(result);