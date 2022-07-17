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
    f: function() {
        console.log( 'd::f' );
    },
    __proto__: b
};

console.log( 'b.q = ', b.q ); // 2
console.log( 'b.p = ', b.p ); // 10

b.p = 20;
console.log( 'a.p = ', a.p ); // 1

b.q = 20;
console.log( 'b.q = ', b.q ); // 20
console.log( 'a.q = ', a.q ); // 2

b.__proto__.q = 20;
console.log( 'a.q = ', a.q ); // 20
console.log( 'c.q = ', c.q ); // 20

console.log( 'd.p = ', d.p ); // 100
d.p++; // d.p = d.p + 1
console.log( 'd.p = ', d.p ); // 101
console.log( 'd.__proto__.p = ', d.__proto__.p ); // 10

console.log( 'd.q = ', d.q ); // prints a.q (20)

console.log( Object.prototype );

d.f();


