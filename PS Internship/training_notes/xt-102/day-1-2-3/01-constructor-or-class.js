// old way to define a class
function Person( name, age ) {
    this['first name'] = name;
    this.age = age;

    // return this;
}

const salman = new Person( 'Salman', 21 ); // this -> { __proto__ : { constructor : Person } }
console.log( salman );

const shahrukh = new salman.__proto__.constructor( 'Shah Rukh', 45 );

console.log( salman.__proto__.constructor === Person ); // true
console.log( salman instanceof Person ); // true

// Check what is there in __proto__
// Create a User class to represent a uyser