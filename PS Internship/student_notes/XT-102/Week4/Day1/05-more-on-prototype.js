
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

console.log(john.ancestralHome=== jane.ancestralHome) // true (both points to same reference)
//john.ancestralHome.name= 'Badi Haveli';
// console.log(jane.ancestralHome.name) // 'Bad Haveli' - yes it changes because both share same object in memory both refer to same prototype

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
console.log( john ); // { name: 'Jonathon', surname: 'Doherty' }
console.log( jane.surname ); // old one
console.log( jane.ancestralHome ); // old one

// we are in fact adding properties to john.origin which is a property on the prototype (doeFamily)

// Here we are changing john.origin not john - checks john.origin is there on john its not there so it goes to main prototype so it sets  on prototype (here we are changing property of john.origin  which is a property on the prototype(doeFamily))
john.origin.otherLanguages = [ 'French' ];
john.origin.language = 'German';



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
console.log( john );
console.log( doeFamily );
console.log( jane );
