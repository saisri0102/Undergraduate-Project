// every function has a context when it is called
// every time a function is called its context can change
function foo() {
    // "this" is some extra info
    console.log( this ); // function context : what is the "this" in the function?
}

// Any general function when called, using a global reference to it (etc.)
// "this" -> window (in the browser), global (in Node.js)
foo();

const obj = {
    name: 'I am foo',
    foo: foo,
    bar: function() {
        console.log( this );
    }
};

// "this" -> calling object, obj
obj.foo();

console.log( foo === obj.foo ); // true

// "this" -> obj
obj.bar();

const bar = obj.bar;

// "this" -> window (in the browser), global (in Node.js)
bar();

function f( cb ) {
    cb(); // window (careful: the function cb cannot access obj)
}

f( obj.bar ); // cb = obj.bar;