// Java : int float double long char boolean
// JS : number (int / float), boolean , string

let priceOfPhone = 20000;
let distanceToSchool = 2.5;

console.log(typeof 123);  //Output: "number"
console.log(typeof priceOfPhone);  //"number"
console.log(typeof distanceToSchool); //"number"

let greeting= 'Good Morning';
console.log(greeting);
let greeting2= "Good a'noon";
console.log(greeting2);
let greeting3= "John said \"Good afternoon\""; //Output: John said "Good afternoon"
console.log(greeting3);

console.log(typeof greeting); // string
console.log(typeof 1); // Number
console.log(typeof typeof 1); //string

let isCold= true;
console.log( typeof isCold); //Boolean

//ES2015 introduced template strings

let name=`John`; //back tick strings allows interpolation
let greeting4= `Good morning ${name}`; //allows string interpolation
console.log(greeting4);
let greeting5= "Good morning $(name)";
let greeting6= 'Good morning $(name)';
console.log(greeting5);
console.log(greeting6);

