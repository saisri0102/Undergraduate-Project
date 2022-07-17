// Primitive are copied by value - number, boolean, string, undefined
// non-primitives are copied by references - objects, arrays, functions
// copy  by value - copying the value of particular variable
// copy by referene - share same memory 


let quantity=100;
let qty= quantity; // copy by value

qty++; // does not effect quantity

console.log(quantity);
console.log(qty);


let john= {
    name:'john',
    age: 23
}

let jonathon= john;
console.log(jonathon);
console.log(john) // jonathon and john both refer to the same object in memory

jonathon.age++;
console.log(jonathon);
console.log(john) // john age have incremented by 1

const numbers = [10,20,30,40];
const nums= numbers; // numbers and nums refer to one and the same array in memory

nums.push(50);

console.log(numbers);
console.log(nums);

