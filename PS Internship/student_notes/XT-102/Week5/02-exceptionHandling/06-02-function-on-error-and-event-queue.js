function f() {
    console.log( 'inside f' );
}

setTimeout(function e() {
    f();
    console.log( 'after 1 sec - I am picked up from the event queue and executed')
}, 1000);

function c() {
    d(); // error
}

function b() {
    c();
}

function a() {
    b();
}

a();

// When an error occurs function call stack is emptied

// Event loop is still "polled" (keeps checking the event queue)
// after 1 second, the function e gets queue
// the function e is picked up and first put into the call stack, then f is pushed, then f is popped, then e is popped