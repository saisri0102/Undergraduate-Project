function sumAsync(x, y, callback){
    setTimeout(function(){

        if ( typeof x!== 'number' || typeof y!== 'number'){
            callback(new Error('both arguments must be numbers'))
            return;
        }
        callback(null, x+y);
    }, 3000);
};

function cb(error, result){

    if(error){
        console.log(error.message);
    }else{
        console.log(result);
    }
   
  
}
sumAsync(12, 'hello', cb);
