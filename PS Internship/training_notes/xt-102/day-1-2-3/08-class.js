// function cb() {
//     this.age++;
// };

function Person( name, age ) {
    this.name = name;
    this.age = age;

    // "method" is a property of an object whose value is a function
    // this way of adding a method, creates a new local function every time new Person() is called, and assign it to celebrateBirthday
    // this.celebrateBirthday = function() {
    //     this.age++;
    // }
}

// already created by runtime
// Person.prototype = { constructor: Person, __proto__ : Object.prototype }

// add methods to constructor function's prototype property so that all objects created will share these methods
Person.prototype.celebrateBirthday = function() {
    ++this.age;
};

Person.prototype.setName = function( name ) {
    this.name = name;
};

const john = new Person( 'John', 32 ); // __proto__ -> Person.prototype
const jane = new Person( 'Jane', 28 ); // __proto__ -> Person.prototype

john.celebrateBirthday(); // this -> john
jane.celebrateBirthday(); // this -> jane

console.log( john.age );
console.log( jane.age );

console.log( john.celebrateBirthday === jane.celebrateBirthday ); // false -> they are 2 different function

john.setName( 'Jonathan' );
console.log( john );