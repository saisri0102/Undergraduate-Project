import makeAjaxRequest from '../utils/ajax.js';

class UsersList {
    async getUsers() {
        try {
            const users = await makeAjaxRequest( {
                method: 'GET',
                endpoint: 'users',
                authenticated: true
            } );

            return users;
        } catch ( error ) {
            throw new Error( error.message );
        }
    }
}
export {
    UsersList
};
