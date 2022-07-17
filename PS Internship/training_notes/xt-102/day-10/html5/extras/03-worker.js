// function sum( a, b ) {
//     return a + b;
// }

function sum() {
    var result = 0;
    for( var i = 0; i < 10000000000; i++ ) {
        for( var j = 0; j < 10000000000; j++ ) {
            result += i;
        }
    }
}

onmessage = function( event ) {
    var result = sum( event.data.a, event.data.b );

    postMessage({
        result: result
    });
};