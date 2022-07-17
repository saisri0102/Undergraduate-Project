// MultipleChoiceQuestion inherits from Question
// Java, C++, Python : "Class inherits from another Class"

// JavaScript: "Object inherits from another object"
// Prototypal inheritance
// Object can inherit from only 1 object (only 1 prototype exists for an object)

const doeFamily = {
    surname: 'Doe',
    origin: 'Polish'
};

const john = {
    name: 'John',
    
    // doeFamily is prototype of john
    // (ES2015 syntax) establishes relationship between john (derived object) and doeFamily (base object)
    __proto__: doeFamily
};

console.log( john.__proto__.surname ); // of course this works
console.log( john.surname ); // notice we have NOT used __proto__
console.log( john.origin );

const jane = {
    name: 'Jane'
};

// the old way to establish inheritance between objects
Object.setPrototypeOf( jane, doeFamily ); // doeFamily is prototype of jane
console.log( jane.surname ); // notice we have NOT used __proto__
console.log( jane.origin );