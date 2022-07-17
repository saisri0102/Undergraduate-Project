function createPerson( name, emailids, address ) {
    // return {
    //     name: name,
    //     emailids: emailids,
    //     address: address
    // };
    return {
        name, // name: name
        emailids,
        address
    };
}

const john = createPerson( 
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

const jane = createPerson( 
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

console.log( john );
console.log( jane );