import makeAjaxRequest from '../utils/ajax.js';

class Authentication {
    LS_KEYS = {
        EMAIL: 'email',
        NAME: 'name',
        TOKEN: 'token'
    };

    storeUserInfo( responseJson ) {
        localStorage.setItem( this.LS_KEYS.EMAIL, responseJson.email );
        localStorage.setItem( this.LS_KEYS.NAME, responseJson.name );
        localStorage.setItem( this.LS_KEYS.TOKEN, responseJson.token );
    }

    getToken() {
        return localStorage.getItem( this.LS_KEYS.TOKEN );
    }

    getEmail() {
        return localStorage.getItem( this.LS_KEYS.EMAIL );
    }

    async login( email, password ) {
        const body = {
            email,
            password
        };
        try {
            const details = await makeAjaxRequest( {
                method: 'POST',
                endpoint: 'auth/login',
                body,
                authenticated: true
            } );

            this.storeUserInfo( details );
            return details;
        } catch ( error ) {
            throw new Error( error.message );
        }
    }

    async signup( name, email, password ) {
        const body = {
            name,
            email,
            password
        };
        try {
            const details = await makeAjaxRequest( {
                method: 'POST',
                endpoint: 'auth/register',
                body,
                authenticated: true
            } );
            return details;
        } catch ( error ) {
            throw new Error( error.message );
        }
    }
}

export { Authentication };
