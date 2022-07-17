function push(x: number[], y: number[]): number[];
function push(x: number[], y: number): number[];

function push(z: number[], y: number[] | number): number[] {
  if (typeof y === "number") {
    z.push(y);
  } else {
    for (let i = 0; i < y.length; i++) {
      z.push(y[i]);
    }
  }
  return z;
}

console.log(push([1,2,3,4],4)); // prints 25;
console.log(push([1,2,3,4],[4,5,6]));
