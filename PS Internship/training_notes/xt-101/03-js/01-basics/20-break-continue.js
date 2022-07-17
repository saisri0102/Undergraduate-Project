// break is used to exit the nearest loop
// continue is used to stop the current iteration and continue with the next iteration of the loop
for( let i = 1; i < 10; i++ ) {
    if( i === 5 ) {
        break;
    }

    console.log( i );
}

console.clear();

for( let i = 1; i < 10; i++ ) {
    if( i === 5 ) {
        continue;
    }

    console.log( i );
}