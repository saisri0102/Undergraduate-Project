function Person( name, age ) {
    this.name = name;
    this.age = age;
}

Person.prototype.celebrateBirthday = function() {
    ++this.age;
};

Person.prototype.setName = function( name ) {
    this.name = name;
};

function Employee( name, age, role, dept ) {
    // Like super( name, age ) in Java
    Person.call( this, name, age ); // this without call-> window (in browser), this -> global (in Node.js)
    
    this.role = role;
    this.dept = dept;
}

// Employee.prototype = { constructor: Employee, __proto__: Object.prototype } -> { constructor: Employee, __proto__: Person.prototype } 
Object.setPrototypeOf( Employee.prototype, Person.prototype );

Employee.prototype.promote = function() {
    this.role = `Senior ${this.role}`;
};

// john.__proto__ -> { constructor: Employee, __proto__: Person.prototype } 
const john = new Employee( 'John', 32, 'Accountant', 'Finance' ); // __proto__ -> Employee.prototype
const jane = new Employee( 'Jane', 28, 'Web Developer', 'IT' ); // __proto__ -> Employee.prototype

john.celebrateBirthday(); // this -> john
jane.celebrateBirthday(); // this -> jane

john.promote();
jane.promote();

console.log( john.age );
console.log( jane.age );


john.setName( 'Jonathan' );
console.log( john );