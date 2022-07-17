const doeFamily = {
    surname: 'Doe', // string -> primtive
    ancestralHome: { // non-primitive
        name: 'The Big Mansion',
        city: 'Mumbai'
    },
    origin: {
        country: 'Poland',
        language: 'Polish'
    },
    emailids: [
        'doe@yahoo.com',
        'doe@gmail.com'
    ]
};

const john = {
    name: 'John', // own property
    __proto__: doeFamily
};

const jane = {
    name: 'Jane',
    __proto__: doeFamily
};

console.log( john.name ); // "own property"
console.log( john.surname ); // inherited property

// setting an own property
john.name = 'Jonathan';
console.log( john );
john.ancestralHome = {
    name: 'Badi Haveli',
    city: 'Bombay'
};

// setting an inherited property - does not work!
// properties will always be set as own properties
john.surname = 'Doherty';
console.log( john );

console.log( jane.surname ); // old one
console.log( jane.ancestralHome ); // old one

// we are in fact adding properties to john.origin which is a property on the prototype (doeFamily)
john.origin.otherLanguages = [ 'French' ];
john.origin.language = 'German';

// error
// john.xyz.abc = 1; // fails as john.xyz is undefined

console.clear();

console.log( john );
console.log( doeFamily );
console.log( jane.origin );

// modifies prototype
john.emailids.push( 'doe@sapient.com' );

// sets own property
john.emailids = [
    'john@gmail.com'
];