import { makeAjaxRequest } from '../utils/ajax';

const getWorkshops = async () => makeAjaxRequest( {
    method: 'GET',
    endpoint: 'workshops',
    authenticated: true
} );

const getWorkshopById = async ( id ) => makeAjaxRequest( {
    method: 'GET',
    endpoint: `workshops/${id}`, // Note: We are using a back-tick quoted string here
    authenticated: true
} );

export {
    getWorkshops,
    getWorkshopById
};
