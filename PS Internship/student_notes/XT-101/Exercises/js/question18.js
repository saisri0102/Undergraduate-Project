function addTo(x){
    return function addTox(y){
        return x+y;
    }
}

var addTo10 = addTo(10);
console.log(addTo10(5));

var addTo20 = addTo(20);
console.log(addTo20(5));

var addTo30 = addTo(30);
console.log(addTo30(5));