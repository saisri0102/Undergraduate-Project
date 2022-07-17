(function() {
    var span = document.getElementById( 'score' );
    
    var es = new EventSource( 'http://localhost:3000/score' );
    es.onmessage = function( event ) {
        span.innerHTML = event.data;
    };

    // stop listening after 30 seconds
    setTimeout(function() {
        es.close();
        span.innerHTML += ' (stopped tracking score)';
    }, 30000);
})();