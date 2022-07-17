import { makeAjaxRequest } from '../utils/ajax.js';

const addSession = async ( session ) => makeAjaxRequest( {
    method: 'post',
    endpoint: 'sessions',
    body: session,
    authenticated: true
} );

export {
    addSession
};
