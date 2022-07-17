// recursive function of fibanocci series generator.
// 0,1,1,2,3,4,8,13,21,34,55,89,144,233,377,600...

function fibonacci(n){
    if(n<=1){
        return n;
    }
    else{
        return fibonacci(n-1) + fibonacci(n-2);
    }
}

for(let i = 0; i < 10; i++) {
    console.log(fibonacci(i));
}

console.log(fibonacci(10));
