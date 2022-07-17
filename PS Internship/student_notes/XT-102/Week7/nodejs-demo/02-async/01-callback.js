function sumAsync(x, y, callback){
    setTimeout(function(){
        callback(x+y);
    }, 3000);
};

function cb(result){
    console.log(result);
  
}
sumAsync(12, 13, cb);
