import AppConfig from '../config.js';
import { Authentication } from '../services/auth.js';

async function makeAjaxRequest( {
    method, endpoint, body, authenticated
} ) {
    const authentication = new Authentication();

    const headers = new Headers();
    const requestOptions = {
        method,
        headers,
        redirect: 'follow'
    };

    if ( body ) {
        headers.append( 'Content-Type', 'application/json' );
        requestOptions.body = JSON.stringify( body );
    }

    if ( authenticated ) {
        headers.append( 'Authorization', authentication.getToken() );
    }

    // sanity check: remove leading slash (if any)
    if ( endpoint.substr( 0, 1 ) === '/' ) {
        endpoint = endpoint.substr( 1 );
    }

    const promiseResponse = await fetch( `${AppConfig.API_BASE_URL}/${endpoint}`, requestOptions );

    if ( promiseResponse.ok ) {
        try {
            let response;
            if ( endpoint === 'auth/register' ) {
                response = await promiseResponse.text();
            } else {
                response = await promiseResponse.json();
            }
            return response;
        } catch ( error ) {
            throw new Error( error.message );
        }
    } else {
        const errorResponse = await promiseResponse.json();
        throw new Error( errorResponse.message );
    }
}

export default makeAjaxRequest;
