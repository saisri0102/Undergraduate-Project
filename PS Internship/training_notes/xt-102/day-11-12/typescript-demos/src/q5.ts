function filter(z: any[], y: Function) {
  let a = [];
  for (let i = 0; i < z.length; i++) {
    if(y(z[i])){
      a.push(z[i]);
    }
  }
  return a;
}

function isOdd(x:number) {
  return x%2===1;
}

console.log(filter( [ 1, 2, 3, 4, 5, 6, 7, 8 ], isOdd ) ); // prints [ 1, 4, 9, 16 ]
