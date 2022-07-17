function map(z: any[], y: Function) {
  for (let i = 0; i < z.length; i++) {
    z[i] = y(z[i]);
  }
  return z;
}

function square(x:number) {
  return x * x;
}

function cube(x:number) {
  return x * x * x;
}

console.log( map( [ 1, 2, 3, 4 ], square ) ); // prints [ 1, 4, 9, 16 ]
console.log( map( [ 1, 2, 3, 4 ], cube ) ); // prints [ 1, 8, 27, 64 ]
