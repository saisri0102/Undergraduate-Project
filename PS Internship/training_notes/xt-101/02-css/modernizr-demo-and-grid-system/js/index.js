(function () {
    const messagesEl = document.querySelector('#messages');

    if( Modernizr.mathml ) { //feature is supported by the browser
        console.log( 'Math ML supported' );
    } else { // feature not supported - load polyfill
        $.getScript( '/libs/mathjax/es5/tex-mml-chtml.js' )
            .done(function () {
                console.log( arguments );
                console.log('script loaded');
            })
            .fail(function() {
                console.error( arguments );
                console.log('script failed to load');
            });
    }
}());