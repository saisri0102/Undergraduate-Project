function sumArray(array, transform){
    let sum=0;
    for(let i=0;i<array.length;i++){
        sum= sum+transform(array[i]);
    }
    return sum;
}
function square(z){
    return z*z;
}
function cube(z){
    return z*z*z;
}

let result1= sumArray([1,2,3], square);
let result2= sumArray([1,2,3], cube);

console.log(result1);
console.log(result2);