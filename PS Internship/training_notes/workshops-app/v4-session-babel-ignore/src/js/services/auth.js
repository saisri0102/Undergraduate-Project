import { makeAjaxRequest } from '../utils/ajax.js';

/**
 * Authorization for the app
 */
const LS_KEYS = {
    EMAIL: 'email',
    TOKEN: 'token'
};

const storeUserInfo = ( { email, authToken: token } ) => {
    localStorage.setItem( LS_KEYS.EMAIL, email );
    localStorage.setItem( LS_KEYS.TOKEN, token );

    return {
        email
    };
};

const getToken = () => localStorage.getItem( LS_KEYS.TOKEN );

const login = ( email, password ) => makeAjaxRequest( {
    method: 'POST',
    endpoint: 'login',
    body: {
        email,
        password
    }
} ).then( storeUserInfo );

export {
    getToken,
    login
};
