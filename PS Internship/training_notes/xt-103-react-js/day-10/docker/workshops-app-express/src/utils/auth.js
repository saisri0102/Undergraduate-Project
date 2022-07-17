const jwt = require( 'jsonwebtoken' );

function authenticate( req, res, next ) {
    // get Authorization header
    const token = req.header( 'Authorization' );

    if( !token ) {
        const error = new Error( 'Token is not sent' );
        error.status = 401;
        
        next( error );
        
        return;
    }

    jwt.verify( token, 'shh...', ( err, claims ) => {
        if( err ) {
            const error = new Error( 'Go away intruder' );
            error.status = 401;
            
            return next( error );
        }

        res.locals.claims = claims;

        next();
    });
}

function isAdmin( req, res, next ) {
    if( !res.locals.claims.isAdmin ) {
        const error = new Error( 'You do not have sufficient privileges' );   
        error.status = 403;

        return next( error );
    }

    next();
}

module.exports = {
    authenticate,
    isAdmin
};