function sumAsync(x, y, callback){
    setTimeout(function(){

        if ( typeof x!== 'number' || typeof y!== 'number'){
            callback(undefined)
        }
        callback(x+y);
    }, 3000);
};

function cb(result){

    if(result == undefined){
        console.log('something went wrong')
    }else{
        console.log(result);
    }
   
  
}
sumAsync(12, 13, cb);
