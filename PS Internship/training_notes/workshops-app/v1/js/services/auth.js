/**
 * Authorization for the app
 */
const LS_KEYS = {
    EMAIL: 'email',
    TOKEN: 'token'
};

function storeUserInfo( { email, authToken : token } ) {
    localStorage.setItem( LS_KEYS.EMAIL, email );
    localStorage.setItem( LS_KEYS.TOKEN, token );

    return {
        email: email
    };
}

function getToken() {
    return localStorage.getItem( LS_KEYS.TOKEN );
}

function login( email, password ) {
    return makeAjaxRequest( {
        method: 'POST',
        endpoint: 'login',
        body: {
            email: email,
            password: password
        }
    }).then( storeUserInfo );
}
