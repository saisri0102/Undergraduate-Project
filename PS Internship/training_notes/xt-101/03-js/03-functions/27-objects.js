const john = {
    name: 'John',
    'age': 32, // all keys are strings -> we can quote it explicitly
    emailids: [
        'john@gmail.com',
        'john@example.com'
    ],
    address: {
        city: 'Bangalore',
        pinCode: 560101
    },
    "favorite color": 'crimson' // you MUST use quotes when keys have special characters
};

// adding / editing properties
john.birthday = '2000-12-25'; // john['birthday'] is also fine

// removing properties
delete john['age']; // delete john.age is also fine

// when accessing / adding / editing / deleting keys which have special characters, you MUST use [] notation
john['favorite color'] = 'olive';

console.log( john.xyz ); // undefined

// error
// console.log( john.xyz.abc ); // error (undefined.abc -> error)

john.children = [
    'mark',
    'mary'
];

console.log( john );