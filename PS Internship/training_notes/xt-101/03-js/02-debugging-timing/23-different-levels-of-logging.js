for( let i = 1; i <= 5; i++ ) {
    let line = '';

    for( let j = 1; j < i; j++ ) {
        line = line + j + ' ';
    }

    console.log( line );
}

console.info( 'Starting fetching data' );
console.warn( 'Time exceeding limits' );
console.error( 'Unable to fetch data - network error' );