function errorHandler( req, res, next ) {
    console.log( 'errorHandler' );
    res.render( 'error' );
}

module.exports = errorHandler;