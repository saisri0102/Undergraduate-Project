import { makeAjaxRequest } from '../utils/ajax.js';

const getWorkshops = async () => {
    return makeAjaxRequest({
        method: 'GET',
        endpoint: 'workshops',
        authenticated: true
    });
};

const getWorkshopById = async ( id ) => {
    return makeAjaxRequest({
        method: 'GET',
        endpoint: `workshops/${id}`, // Note: We are using a back-tick quoted string here
        authenticated: true
    });
};

export {
    getWorkshops,
    getWorkshopById
};