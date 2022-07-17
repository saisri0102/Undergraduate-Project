function sumArray( z : number[] ) {
    var sum = 0;
    for(let i=0;i<z.length;i++){
        sum+=z[i];
    }
    return sum;
}

let result = sumArray( [ 1, 2, 3, 4 ] );
console.log( result);