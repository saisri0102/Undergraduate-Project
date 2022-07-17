function contains(z: any[], y: any) {
  var found = false;
  for (let i = 0; i < z.length; i++) {
    if (z[i] === y) {
      found = true;
    }
  }
  return found;
}

console.log(contains([1, "hello", 3, true], 3)); // prints true
console.log( contains( [ 1, 'hello', 3, true ], 5 ) ); // prints false
