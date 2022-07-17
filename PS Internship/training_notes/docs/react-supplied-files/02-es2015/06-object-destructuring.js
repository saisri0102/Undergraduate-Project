let john = {
    name: 'John DOe',
    age: 32,
    emailids: [
        'john.doe@example.com',
        'john.doe@gmail.com',
    ],
    address: {
        firstline: '32, Rosewell Court',
        city: 'San Francisco',
        zip: 52110
    }
};

// Step 1: Comment out the below declaration statement and redo the same using the object destructuring syntax
let name = john.name, grayHairs = john.age, primaryEmailid = john.emailids[0], city = john.address.city, country = john.address.country || 'USA';

console.log( name, grayHairs, primaryEmailid, city, country );

// Step 2: Accept only first email id and city into the function using object/array destructuring
// function postMessageTo( /* your code goes in here */ ) {
//     console.log( primaryEmailId, zip );
// }

// postMessageTo( john );