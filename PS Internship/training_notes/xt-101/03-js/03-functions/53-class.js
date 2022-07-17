// ES2015 introduced class keyword for defining classes
class Person {
    constructor( name, emailids, address ) {
        this.name = name;
        this.emailids = emailids;
        this.address = address;
    }

    // methods are shared among all objects of the class
    addEmailid( emailid ) {
        this.emailids.push( emailid );
    }
}

class Employee extends Person {
    constructor( name, emailids, address, role, dept ) {
        super( name, emailids, address ); // Person contructor is called

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }
}

const john = new Person( 
    'John',
    [ 
        'john@example.com',
        'john@gmail.com'
    ],
    {
        city: 'Bangalore',
        pinCode: 560101
    }
);

const jane = new Employee(
    'Jane',
    [ 
        'jane@example.com',
        'jane@gmail.com'
    ],
    {
        city: 'Chennai',
        pinCode: 600101
    },
    'Web Developer',
    'IT'
);

john.addEmailid( 'john@yahoo.com' );
jane.addEmailid( 'jane@yahoo.com' );

jane.promote();

console.log( john );
console.log( jane );