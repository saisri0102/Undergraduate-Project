function sumSquares(array){
    let sum=0;
  for(let i=0;i<array.length;i++){
      sum= sum+array[i]**2;
  }
  return sum;
}
var result= sumSquares([1,2,3,4]);
console.log(result);