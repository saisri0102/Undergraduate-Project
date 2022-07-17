function onClick() {
    console.log( 'clicked' );
}

// works in all browsers since last 10 years
domNode.addEventListener('click', onClick )

// IE8 - does not work!
domNode.addEventListener('click', onClick )

// facade
// handling event listeners according to browser
function addListener( domNode, event, callback ) {
    if( domNode.addEventListener ) { // all browsers except IE8 and below
        domNode.addEventListener( event, callback, false );
    } else if( domNode.attachEvent ) { // only IE8 and below
        domNode.attachEvent( event, callback );
    }
}

// using the facade
addListener( domNode, 'click', onClick ); // works in all browsers!