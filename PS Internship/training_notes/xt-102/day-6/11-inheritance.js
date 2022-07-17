class Person {
    nationality = Person.getNationality();

    constructor( name, age ) {
        this.name = name;
        this.age = age;
    }

    static getNationality() {
        return 'Indian';
    }

    celebrateBirthday() {
        this.age++;
    }

    setNickname( nickname ) {
        this.nickname = nickname;
    }

    // try not to use this syntx
    setAge = function( newAge ) {
        this.age = newAge;
    }
}

class Employee extends Person {
    // default constructor
    // constructor( ...args ) { // using rest operator
    //     super( ...args ); // spread operator
    // }
    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        // we can call any base class method using super.method()
        super.celebrateBirthday();
        console.log( `Happy birthday ${this.name}` );
    }
}

const john = new Employee( 'John', 32, 'Web Developer', 'IT' ); // args -> [ 'John', 32 ]
john.celebrateBirthday();
john.setNickname( 'Johnny' );
john.promote();
console.log( john );

console.log( Employee.getNationality() );