console.log('Started executing index.js ');

// the arthimetic.js gets excuted here

// 1st way
const Arth = require('./arithmetic.js');

// 2nd way
const {add, subtract, multiply } = require ('./arithmetic.js');
// importing the SAME module again will NOT execute it again
const { divide } = require('./arithmetic.js');

try{
console.log(Arth.add(12, 13)); // error - we have not exported add - the script stops excuting here without try
}
catch (err){
    console.log(err.message); // Arth.add is not a function
}

console.log(Arth.subtract(30,10));
console.log(Arth.multiply( 5, 2));

console.log(subtract(30,10));
console.log(multiply( 5, 2));
console.log(divide(10 , 2)); // we can use divide

console.log('Finished executing index.js ');