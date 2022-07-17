// for..in
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
    }
};

for( let key in john ) {
    console.log( key );
    console.log( john[key] );
}