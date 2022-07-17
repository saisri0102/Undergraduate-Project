function Person( name, age ) {
    this.name = name;
    this.age = age;
}

// A prototype property is created on the function
// Person.prototype = {
//     constructor: Person
// };

const john = new Person( 'John', 32 );
console.log( john.__proto__ );
console.log( Person.prototype );

// are they the same object?? yes!
console.log( john.__proto__ === Person.prototype );

console.log( john.__proto__.constructor );
console.log( john.constructor );