//In java, c++, python - class inherits from another class


//In JS - object inherit from another object
// Object can inherit from only 1 object (only 1 prototype exists for an object)

//__proto__ is a way to inherit properties from an object in JavaScript. ...
// prototype is an accessor property that exposes the [[Prototype]] of the object through which it is accessed.

const doeFamily= {
    surname: 'Doe',
    origin: 'Polish'
};
const john = {
    name: 'John',
    // doeFamily is prototype of jane
    // (ES2015 syntax) Establishes relationship between john (derived object) and doeFamily (base object)
    __proto__:doeFamily  
};
console.log(john.__proto__.surname); // works
console.log(john.surname); // not used __proto__
console.log(john.origin);

const jane= {
    name: 'Jane'
};

// Old method
Object.setPrototypeOf(jane, doeFamily); // doeFamily is prototype of jane
console.log(jane.surname); // works
console.log(jane.origin);
console.log(Object.getPrototypeOf(jane));
