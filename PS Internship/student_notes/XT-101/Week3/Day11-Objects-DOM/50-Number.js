const quantity = 10;
const quantityObj = new Number(quantity);

// EXERCISE:
// toFixed()
// toPrecision()
// What properties in the number class represent the smallest positive number , largest and safest +ve integer
//that can be represented , and similarly for -ve numbers
// Number. ?
// Try .valueOf() to get back the associated primitive number value
// What is the difference between the two?



console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.MAX_VALUE); // 1.7976931348623157e+308
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.POSITIVE_INFINITY); // Infinity


// toFixed()

var num1 = 5.56789;
var num1Res1 = num1.toFixed(2); // Convert a number into a string, rounding the number to keep only two decimals:
console.log(typeof num1Res1);  // String
var num1Res2 = num1.toFixed(); //  Convert a number, rounding to nearest integer (no decimals):
var num1Res3 = num1.toFixed(10) //  

console.log(num1Res1); // 5.57
console.log(num1Res2); // 6
console.log(num1Res3); // 5.5678900000

// toPrecision()

var num2 = 13.3714; 
var num2Res1 = num2.toPrecision();  // Format a number to a specified length:
var num2Res2 = num2.toPrecision(2);
var num2Res3 = num2.toPrecision(3);
var num2Res4 = num2.toPrecision(10);

console.log(num2Res1); // 13.3714 (original)
console.log(num2Res2); // 13 (only two digits)
console.log(num2Res3); // 13.4
console.log(num2Res4); // 13.37140000 (10 digits)

// isInteger()

// This method returns true if the value is of the type Number, and an integer (a number without decimals). 
// Otherwise it returns false.
Number.isInteger(123) //true
Number.isInteger(-123) //true
Number.isInteger(5-2) //true
Number.isInteger(0) //true
Number.isInteger(0.5) //false
Number.isInteger('123') //false
Number.isInteger(false) //false
Number.isInteger(Infinity) //false
Number.isInteger(-Infinity) //false
Number.isInteger(0 / 0) //false

//isSafeInteger()

//A safe integer is an integer that can be exactly represented as an IEEE-754 double precision number (all integers from (2^53 - 1) to -(2^53 - 1))


Number.isSafeInteger(123) //true
Number.isSafeInteger(-123) //true
Number.isSafeInteger(5-2) //true
Number.isSafeInteger(0) //true
Number.isSafeInteger(0.5) //false
Number.isSafeInteger(Math.pow(2, 53)) //false
Number.isSafeInteger(Math.pow(2, 53) - 1) //true
Number.isSafeInteger('123') //false
Number.isSafeInteger(false) //false
Number.isSafeInteger(Infinity) //false
Number.isSafeInteger(-Infinity) //false
Number.isSafeInteger(0 / 0) //false

