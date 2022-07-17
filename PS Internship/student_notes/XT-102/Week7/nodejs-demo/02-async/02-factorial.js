//Write a function that calculates the factcorial of a number after 2sec and passes the result to a caller in the form of a callback 

function factorial(n, callback){
    setTimeout(function(){
        let factorialValue = 1;
        for(let i=1; i<=n; i++){
            factorialValue = factorialValue * i ;
        }
        callback(factorialValue);
    }, 2000)
}

function cb(result){
   
    console.log('Result  = ', result);
}

factorial(5, cb);
factorial(4, cb);