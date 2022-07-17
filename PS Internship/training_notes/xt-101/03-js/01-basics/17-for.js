// scope of i is the block in which it is declared
for( let i = 1; i < 10; i++ ) {
    console.log( i );
}

console.log( 'After loop exit i = ' , i );

// scope of j is the function in which it is declared / global
for( var j = 1; j < 10; j++ ) {
    console.log( j );
}

console.log( 'After loop exit j = ' , j );