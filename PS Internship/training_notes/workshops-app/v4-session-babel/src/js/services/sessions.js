import { makeAjaxRequest } from '../utils/ajax';

const addSession = async ( session ) => makeAjaxRequest( {
    method: 'post',
    endpoint: 'sessions',
    body: session,
    authenticated: true
} );

export {
    addSession
};
