function Stack() {
    this.arr = [];
}

Stack.prototype.push = function( data ) {
    this.arr.push( data );
};

Stack.prototype.pop = function() {
    return this.arr.pop();
};

Stack.prototype.show = function() {
    console.log( this.arr );
};

function Queue() {
    this.arr = [];
}

Queue.prototype.enqueue = function( data ) {
    this.arr.push( data );
};

Queue.prototype.dequeue = function() {
    return this.arr.shift();
};

Queue.prototype.show = function() {
    console.log( this.arr );
};

// Mixin - Class-based, Functional mixins
function StackAndQueue() {
    Stack.call( this );
    Queue.call( this );
}

// This is NOT inheritance
Object.assign( StackAndQueue.prototype, Stack.prototype, Queue.prototype, { constructor: StackAndQueue } );

console.log( StackAndQueue.prototype );

const stack = new StackAndQueue();

// use it like a stack
stack.push( 1 );
stack.push( 2 );
stack.push( 3 );
stack.pop();
stack.show();

const queue = new StackAndQueue();

// use it like a queue
queue.enqueue( 1 );
queue.enqueue( 2 );
queue.enqueue( 3 );
queue.dequeue();
queue.show();

// -----------------------
// Aside on Object.assign()
const dest = { x: 1, z: 1 };
const src1 = { y : 2, z: 2 };

// Object.assign() can be recreated usign a simple for..in loop
Object.assign( dest, src1 ); // sets the first object to { x: 1, y: 2 }

console.log( dest ); 