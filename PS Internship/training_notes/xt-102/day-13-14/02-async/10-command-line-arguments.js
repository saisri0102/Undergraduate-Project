// an array of the command line arguments
console.log( process.argv );
console.log( process.argv[2] );
console.log( process.argv[3] );
console.log( process.argv.length );

process.env.NODE_ENV === 'development'