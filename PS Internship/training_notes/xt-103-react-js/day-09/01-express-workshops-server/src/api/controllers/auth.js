const users = require( '../../../data/users.json' );
const jwt = require( 'jsonwebtoken' );

function login( req, res ) {
    const { email, password } = req.body;

    // check the DB for matching email+password combination
    const user = users.find( user => user.email === email && user.password === password );

    if( !user ) {
        res.status( 403 );
        res.json({
            message: 'Invalid credentials'
        });
        return;
    }

    // privileges of the user are encoded in the claims
    const claims = {
        admin: user.admin,
        email: user.email
    };

    // the second argument (secret string should not be hard-coded in code - it is to be stored in an environment variable)
    jwt.sign( claims, 'shhh', function( err, token ) {
        if( err ) {
            res.status( 500 );
            res.json({
                message: 'Unable to generate token'
            });
            return;
        }

        res.json({
            email,
            token
        });
    });
}

module.exports = {
    login
};