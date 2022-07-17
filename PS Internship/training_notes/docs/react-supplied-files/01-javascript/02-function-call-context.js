/**
 * A function's call context depends on the variable (reference) being used to access the function, not on the function itself.
 * A global reference results in the global object being set as context (window in browser/global in Node JS). 
 * An object method reference results in calling object being set as context.
 */
function printLocation() {
    console.log( 'printName context = ', this );
    console.log( this.location );
}

var john = {
    name: 'John',
    age: 32,
    location: 'San Jose',
    celebrateBirthday: function() {
        console.log( 'celebrateBirthday context = ', this );
        this.age++;
    },
    printLocation: printLocation
};

// global celebrateBirthday (references the same function as john.celebrateBirthday)
const celebrateBirthday = john.celebrateBirthday;
console.log( celebrateBirthday === john.celebrateBirthday );

// john.printLocation references the same function as the global printLocation
console.log( printLocation === john.printLocation );

john.celebrateBirthday();
celebrateBirthday();

john.printLocation();
printLocation();