/**
 * Variables declared with const cannot be assigned a different value later
 * 
 * Tip: Prefer using const (over let) if you do not plan to reassign a variable to some other value
 */
// Self-exploration : const has exact same scoping rules as let


// Variables declared as const MUST have an initial value assigned at the time of declaration. Once assigned, you cannot reassign a value to such a variable.
const x = 1;
// x = 2; // error - reassignment not allowed

// --------------------------------------------

// Declaring an object (including array) as const does NOT make it immutable, i.e. the properties of that object can still be reassigned
const john = {
    name: 'John',
    age : 32
};

// john = { // error - the variable john iteself cannot be assigned to something else
//     name: 'John',
//     age: 33
// };

john.age++; // ok - we are not reassigning john reference to a different object - we only modify the existing object

console.log( john );

// --------------------------------------------

// Self-exploration: Declare an array as const - you can verify that items can still be added/removed/updated in the array.