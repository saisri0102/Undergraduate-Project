function exponentFactory( z : number) {
    if(z===2){
        return function (x:number){
            return x*x;
        };
    }else if(z===3){
        return function (x:number){
            return x*x*x;
        };
    }else{
        return function (x:number){
            return x;
        }
    }
}

var fn = exponentFactory( 2 );
console.log( fn( 5 ) ); // prints 25;
fn = exponentFactory( 3 );
console.log( fn( 5 ) ); // prints 125;
fn = exponentFactory( 4 );
console.log( fn( 5 ) ); // prints 5;