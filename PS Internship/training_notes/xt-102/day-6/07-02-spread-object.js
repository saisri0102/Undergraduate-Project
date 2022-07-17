// Not ES2015 (I think it is ES2018)
const john = {
    name: 'John',
    // spouse: 'Jane',
    age: 32,
    address: {
        city: 'Bangalore',
        pincode: 560101
    },
    emails: [
        'john@example.com',
        'john@gmail.com'
    ]
};

// { name: john.name, age: john.age, address: john.address, age: 33 } // age will get the last value
const johnCopy = {
    ...john,
    age: 33
};

johnCopy.name = 'Jonathan'; // does not modify john.name
johnCopy.address.city = 'Gurgaon'; // also modifies john.address.city

console.log( 'john =', john );
console.log( 'johnCopy = ', johnCopy );

console.clear();

johnCopy.address = { // johnCopy.address references a different object now
    city: 'Hyderabad',
    pincode: 460101
};

console.log( 'john =', john );
console.log( 'johnCopy = ', johnCopy );

// EXERCISE:
// how to create a copy where email and address have copies of the original email and address
const johnProperCopy = {
    ...john,
    address: {
        ...john.address
    },
    emails: [ ...john.emails ]
};

johnProperCopy.address.city = 'Mumbai';

console.log( 'john = ', john );
console.log( 'johnProperCopy = ', johnProperCopy );