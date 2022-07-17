import { makeAjaxRequest } from '../utils/ajax.js';
import Session from '../models/Session.js';

const addSession = async ( session : Session ) : Promise<Session> => makeAjaxRequest( {
    method: 'POST',
    endpoint: 'sessions',
    body: session,
    authenticated: true
} );

export {
    // eslint-disable-next-line import/prefer-default-export
    addSession
};