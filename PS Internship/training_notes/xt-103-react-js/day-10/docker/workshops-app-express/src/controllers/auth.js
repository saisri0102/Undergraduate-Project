const jwt = require( 'jsonwebtoken' );

/**
 * req.body = { email: 'john.doe@example.com', password: 'password' }
 * No error handling done
 */
function sendToken( req, res, next ) {
    const { email, password } = req.body;

    // check in DB for matching emailid and password
    if( 
        ( email === 'john.doe@example.com' || email === 'jane.doe@example.com' ) &&
        password === 'password'
    ) {
        
        const claims = {
            name: 'John Doe',
            email: 'john.doe@example.com'
        };

        if( email === 'john.doe@example.com' ) {
            claims.isAdmin = true;
        } else {
            claims.isAdmin = false;
        }

        // @todo Move the secret key form the code t an environment variable
        jwt.sign( claims, 'shh...', { expiresIn: '24h' }, ( err, token ) => {
            if( err ) {
                const error = new Error( 'Error in authentication' );
                error.status = 500;

                return next( error );
            }

            return res.status( 200 ).json({
                token,
                name: 'John Doe',
                email: 'john.doe@example.com'
            });
        });
    } else {
        const error = new Error( 'Unknown username / password' );
        error.status = 401;

        return next( error );
    }
}

module.exports = {
    sendToken
};