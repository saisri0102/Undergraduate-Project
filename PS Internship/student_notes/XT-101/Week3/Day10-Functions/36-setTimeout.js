// callback function 

// A callback is a function passed into another function as an argument to be executed later.
// hey browesr fetech the data . After feteching the date call this particular function 
// In JS we cannot execute more than one thing at a time. 
// callback : its called back when timer expires
/**
 * setTimeout() accepts
 * 1. a function f
 * 2. time in milliseconds
 * and requests the env (Node.js/browser) to call f after the given time
 * There exists an event queue where functions waiting to be executed are queued up
 */


 // Hey browser Execute this function after timer expires and nodejs is free 
setTimeout(function(){ // gets into the "event queue " after 3 seconds
    console.log(' I am a function x called after some time');
}, 3000);

// So as first funtcion should excute after 3sec. meanwhile it executes below loop and the above function    will be in hold even its time came 
// After 3sec the below loop is busy. so node js put this function on hold
// After completion of this loop then it excutes settimeout function . 



setTimeout(function(){ // gets into the "event queue " after 3 seconds
    console.log(' I am a function y');
}, 3000);

for(let i=0; i<10000; i++){
    if(i == 10000/2){
        console.log('Mid way');
    }
} 

