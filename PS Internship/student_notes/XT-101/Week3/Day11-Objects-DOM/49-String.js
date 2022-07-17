const greeting ='Good Morning';
const greetingObj = new String(greeting);

// Primitive wrappers works even without "new"

// substr(startindex, no.of chars)
greetingObj.substr(5, 6); //  (Mornin) 5- startindex, 6- no.of characters

// Exercise substring 

//substring(startindex, endindex)
greetingObj.substring(5,10); // (morni) from5 to 9

// using the primitive value - still works
// internally this creates a temporary string object

greeting.substr(5,6);

// invoking with out " new"  operator still works
const greetingObj2 = String(greeting);
console.log(greetingObj2);
console.log(greetingObj.valueOf()); // returns primitive value that it stores

/**
 * Exercise : 
 * indexOf() - 
 * toLowerCase(), toUpperCase()
 * replace()
 * includes()
 * Do 26  in ES5
 * How to get primitive string back from object 
 * 
 * 
 *  */ 

 // indexOf

 var str1 = "Hello world, welcome to the universe.";
 var str1Obj =new String(str1);
 var str1Res1 = str1.indexOf("world");
 var str1Res2 = str1.indexOf("e"); // prints the index of first occurance of e
 var str1Res3 = str1.indexOf("e", 5); // Find the first occurrence of the letter "e" in a string, starting the search at position 5:
 
 console.log(str1Res1);  // 6
 console.log(str1Res2); // 1
 console.log(str1Res3); // 14

 // lastIndexOf()
 
 var str2 = "Hello planet earth, you are a great planet.";
 var str2Res1 = str2.lastIndexOf("planet");
 var str2Res2 = str2.lastIndexOf("planet", 20);

console.log(str2Res1); // 36
console.log(str2Res2); // 6

 //toLowerCase() , toUpperCase()
var str= "Good Morning World!"
console.log(str.toLowerCase()); // good morning world!
console.log(str.toUpperCase()); // GOOD MORNING WORLD!

// replace


var str3 = "Mr Blue has a blue house and a blue car";
var str3Obj = new String(str3);

var str3Res1= str3.replace('blue', 'red'); // single replacement
var str3Res2 = str3.replace(/blue/g, "red");  // global replacement
var str3Res3 = str.replace(/blue/gi, "red"); // global replacement case insensitive

console.log(str3) //  Mr Blue has a blue house and a blue car (Main string is not changed )
str3= str3.replace('blue', 'red') // Now main string also changes
console.log(str3); //  Mr Blue has a red house and a blue car
console.log(str3Res1); //  Mr Blue has a red house and a blue car
console.log(str3Res2); // Mr Blue has a red house and a red car
console.log(str3Res3); // Mr red has a red house and a red car
console.log(str3Obj.replace('blue', 'red')); // Mr Blue has a red house and a blue car

// includes

var str4 = "Hello world, welcome to the universe .";
var str4Res1 = str4.includes("world");
var str4Res2 = str4.includes("world", 12); // Check if a string includes "world", starting the search at position 12:

console.log(str4Res1); // true
console.log(str4Res2); // false