// ES2015 (spread : ...) - a related operator called "rest"
// apply on an array

const numbers = [ 1, 2, 3]
console.log( Math.max ( ...numbers ) ) // Math.max( 1, 2, 3 ) works; Math.max( [ 1, 2, 3 ] ) does not work