// we will do better than simply using a global function for shared functionality (We will do this in XT102 - uses prototype of an object)
function addEmailid( emailid ) {
    this.emailids.push( emailid );
};

// constructor function -  invoked with new operator
// named with PascalCase (as a convention)
function Person( name, emailids, address ) {
    console.log( this );

    this.name = name;
    this.emailids = emailids;
    this.address = address;

    this.addEmailid = addEmailid;

    // return this;
}

// partial set of steps
// 1. an empty object is created by the runtime - { }
// 2. the function is called with its "context" ("this") referring to that object
// 3. A constructor function (one calle with "new") returns the context ("this" - the newly created object)
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

const jane = new Person( 
    'Jane',
    [ 
        'jane@example.com',
        'jane@gmail.com'
    ],
    {
        city: 'Chennai',
        pinCode: 600101
    } 
);

john.addEmailid( 'john@yahoo.com' );
jane.addEmailid( 'jane@yahoo.com' );

console.log( john );
console.log( jane );

// const today = new Date; can also be used since constructor takes no arguments
const today = new Date();