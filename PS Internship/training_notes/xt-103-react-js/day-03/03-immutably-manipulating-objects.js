let state = {
    address: {
        city: 'Bangalore',
        pin: 560101
    },
    emailids: [
        'john@gmail.com',
        'john@yahoo.com'
    ]
};

// change the city
let newState1 = {
    ...state,
    address: {
        ...state.address,
        city: 'Chennai'
    }
};

console.log( newState1 );

let newState2 = {
    ...state,
    emailids: [
        ...state.emailids,
        'john@example.com'
    ]
};

console.log( newState2 );