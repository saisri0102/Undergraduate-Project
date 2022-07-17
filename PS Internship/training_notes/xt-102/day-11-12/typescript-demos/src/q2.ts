function squareEach( z : number[] ) {
    var sum = [];
    for(let i=0;i<z.length;i++){
        sum.push(z[i]*z[i]);
    }
    return sum;
}

console.log( squareEach( [ 1, 2, 3, 4 ] ));