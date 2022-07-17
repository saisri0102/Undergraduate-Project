(function() {
    var status1 = document.getElementById( 'status-1' );
    var status2 = document.getElementById( 'status-2' );

    if( navigator.onLine ) {
        status1.innerHTML = 'At the time of page load, browser was connected to the internet';
    } else {
        status1.innerHTML = 'At the time of page load, either browser was offline or computer was not connected to the internet';
    }

    function showStatus( el, message, isOnline ) {
        el.innerHTML = message;
        el.className = isOnline ? 'online' : 'offline';
        el.style.display = 'block';
        setTimeout(function() {
            el.style.display = 'none';
        }, 5000);
    }

    window.addEventListener( 'online', function() {
        showStatus( status2, 'Browser in online mode. You can browse the internet.', true );
    });

    window.addEventListener( 'offline', function() {
        showStatus( status2, 'Browser went offline. You will not be able to browse the internet.', false );
    });
})();