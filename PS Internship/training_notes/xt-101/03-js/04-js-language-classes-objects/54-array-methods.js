const numbers = [
    2, 18, 15, 12, 28, 200, 400, 30, 3000
];

// index 2 to index 4
console.log( numbers.slice( 2, 5 ) );


numbers.push( 450, 550, 650 );
console.log( numbers );

numbers.pop();
console.log( numbers );

// similarly shift() [removes form the start]
// unshift() adds to the beginning

// includes - newer method 
console.log( numbers.includes( 15 ) ); // true
console.log( numbers.includes( 19 ) ); // false

// indexOf - older method
console.log( numbers.indexOf( 15 ) ); // 2
console.log( numbers.indexOf( 19 ) ); // -1

numbers.reverse();
console.log( numbers );

// alphabetical ordering
numbers.sort();
console.log( numbers );

numbers.sort(function( x, y ) {
    // if( x < y ) {
    //     return -1;
    // }

    // if( x > y ) {
    //     return 1;
    // }

    // return 0;
    return x - y;
});
console.log( numbers );
