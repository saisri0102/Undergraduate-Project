// new Object() is called under-the-hood
const john = {
    name: 'John'
};

// does this object have a prototype? If so, what is its constructor?
// john.__proto__.constructor is "Object"
// anything else
console.log( john );
console.log( john.__proto__ ); // this is Object.prototype
console.log( Object.prototype );