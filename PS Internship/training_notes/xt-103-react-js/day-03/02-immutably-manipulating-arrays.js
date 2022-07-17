let state = {
    numbers: [
        12, 23, 34, 45, 56, 67
    ]
};

// props - NEVER EVER try to modify props
// state - never modify the arrays / objects within the state

// 1.1 Remove item at index 2
// state.numbers.splice( 2, 1 )

// In react we will call setState, here we assign state directly
state = {
    numbers: state.numbers.filter( ( item, idx ) => idx !== 2 )
};

// 2. Remove item 45
newState = {
    numbers: state.numbers.filter( item => item !== 45 )
};

// 1.2 To remove item at a particular index: Use spread operator along with slice to create a new array with item at index 2
state = {
    numbers: [
        ...state.numbers.slice( 0, 2 ), // ...[ 12, 23 ], -> 12, 23,
        ...state.numbers.slice( 3 ) // ...[ 56, 67 ] -> 45, 56, 67
    ]
};

console.log( state );

// 3. Adding an item - Use spread
// 3.1 Adding an item at the end of the array

// Array::push(), Array::unshift(), Array::splice() will change the original array, nor will they return the array -> they simply modify the original array

state = {
    numbers: [
        ...state.numbers,
        78
    ]
};

console.log( state );

// 3.2 Adding an item at the beginning of the array
state = {
    numbers: [
        9,
        ...state.numbers
    ]
};
console.log( state );

// 3.3 How to add in between (add after item at index 2)
state = {
    numbers: [
        ...state.numbers.slice( 0, 3 ), // 9, 12, 23 
        34,
        ...state.numbers.slice( 3 )
    ]
};
console.log( state );