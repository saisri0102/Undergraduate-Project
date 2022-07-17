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

// const age = john.age, name = john.name;

// name variable is not created
const { 
    age,
    spouse = 'Single',
    name : firstName,
    address : { 
        city : place,
        pincode
    },
    emails : [ , secondEmailId ]
} = john;

console.log( firstName, age, place, secondEmailId, spouse );