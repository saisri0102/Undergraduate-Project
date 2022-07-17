import { makeAjaxRequest } from '../utils/ajax.js';
import Workshop from '../models/Workshop.js';

const getWorkshops = async () : Promise<Workshop[]> => makeAjaxRequest( {
    method: 'GET',
    endpoint: 'workshops',
    authenticated: true
} );

const getWorkshopById = async ( id : number ) : Promise<Workshop> => makeAjaxRequest( {
    method: 'GET',
    endpoint: `workshops/${id}`, // Note: We are using a back-tick quoted string here
    authenticated: true
} );

export {
    getWorkshops,
    getWorkshopById
};
