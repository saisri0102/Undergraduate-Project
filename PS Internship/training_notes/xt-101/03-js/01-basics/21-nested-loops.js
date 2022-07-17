// EXERCISE 3 from JS Lab Guide (ES5 and earlier)
// print a line
for( let i = 1; i <= 5; i++ ) {
    let line = '';

    for( let j = 1; j <= i; j++ ) {
        line = line + j + ' ';
    }

    console.log( line );
}