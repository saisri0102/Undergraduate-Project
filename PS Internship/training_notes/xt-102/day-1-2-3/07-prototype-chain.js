// NEVER add to Object.prototype
// Object.prototype.printName = function() {
//     console.log( this.name );
// };

// Object.prototype (new Object())
const a = {
    p: 1,
    q: 2,
    r: [ 3, 4 ],
    s: {
        t: 5,
        u: 6
    },
    f: function() {
        console.log( 'a::f' );
    }
    // __proto__: Object.prototype // last in the prototype.chain
};

const b = {
    p: 10,
    __proto__: a
};

const c = {
    r: [ 30, 40 ],
    __proto__: a
};

const d = {
    p: 100,
    name: 'I am d',
    f: function() {
        console.log( 'd::f' );
    },
    __proto__: b
};

console.log( d.__proto__ === b ); // true
console.log( d.__proto__.__proto__ === a ); // true
console.log( d.__proto__.__proto__.__proto__ === Object.prototype ); // true
console.log( d.__proto__.__proto__.__proto__.__proto__  ); // null

// console.log( d.__proto__.__proto__.__proto__.__proto__.__proto__  ); // error (null.__proto__)

d.printName();