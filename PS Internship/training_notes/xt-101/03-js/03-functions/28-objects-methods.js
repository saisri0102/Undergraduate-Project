// "Methods" are nothing but properties whose value is a function
// Methods are added as values using the function expression syntax

const jonathan = {
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
    "favorite color": 'crimson', // you MUST use quotes when keys have special characters
    setFavoriteColor: function( newColor ) {
        // "this" is called the function's context
        // this.name or this['name'] is fine
        this['favorite color'] = newColor;
    },
    // any object can have a toString() method - returns a string representation of the object
    toString: function() {
        return `My name is ${this.name}`;
    }
};

jonathan.setFavoriteColor( 'goldenrod' );

console.log( jonathan );