import { makeAjaxRequest } from '../utils/ajax.js';

async function addSession( session ) {
    return makeAjaxRequest({
        method: 'post',
        endpoint: 'sessions',
        body: session,
        authenticated: true
    });
}

export {
    addSession
};