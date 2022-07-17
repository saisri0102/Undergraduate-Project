function Person(name,age){
    this.name= name;
    this.age=age;
}

// A prototype property is created on the function by default 
// Person.prototype ={
 //   constructor: Person
// };
const john = new Person('John', 32);
console.log(john.__proto__); // Constructor: Person
console.log(Person.prototype); //( Constructor: Person) Default browser create prototype property and this set to constructor and this constructor refer to that function 

console.log(john.__proto__ == Person.prototype); // true
console.log(john.__proto__.constructor); //  ƒ Person(name,age){this.name= name;this.age=age;}
//console.log(Person.Prototype.constructor); // //  ƒ Person(name,age){this.name= name;this.age=age;}
console.log(john.constructor); //  ƒ Person(name,age){this.name= name;this.age=age;}
console.log(Person.constructor); //ƒ Function() { [native code] }