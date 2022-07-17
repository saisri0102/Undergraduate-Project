import { makeAjaxRequest } from '../utils/ajax.js';

const addSession = async ( session ) => {
    return makeAjaxRequest({
        method: 'post',
        endpoint: 'sessions',
        body: session,
        authenticated: true
    });
};

export {
    addSession
};