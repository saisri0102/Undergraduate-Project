function requestLogger( req, res, next ) {
    req.timeReceived = new Date();

    console.log( 'requestLogger (before passing onto next)' );
    console.log( 'Request received at time : ', req.timeReceived );

    next(); // control goes to the next middleware

    const timeOfResponse = new Date();
    console.log( 'requestLogger (on the way back)' );
    console.log( 'Request received at time : ', timeOfResponse );

    console.log( 'Time in milliseconds to process the request was ' + ( timeOfResponse.getTime() - req.timeReceived.getTime() ) );
}

module.exports = requestLogger;