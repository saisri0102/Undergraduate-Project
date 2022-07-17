const jwt = require( 'jsonwebtoken' );

function authenticate( req, res, next ) {
    const authorizationHeader = req.header( 'Authorization' );
    console.log( authorizationHeader );

    // The token is passed as the authorization header
    const token = authorizationHeader;

    jwt.verify( token, 'shhh', function( err, claims ) {
        if( err ) {
            res.status( 401 );
            res.json({
                message: 'Go away intruder'
            });
            return;
        }

        res.locals.claims = claims; // req.claims = claims
        next();
    });
}

module.exports = {
    authenticate
};