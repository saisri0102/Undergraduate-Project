const { login } = require( './auth' );

// require the dependency
const Ajax = require( '../utils/ajax' );

// create a spy (mock function) { makeAjaxRequest: fakeFunction }
jest.mock( '../utils/ajax' );

describe( 'login function', () => {
    it( 'should make a request to makeAjaxRequest and pass in the right parameter', () => {
        // arrange
        const email = 'john.doe@example.com', password = 'password';

        // configure the fakeFunction to return a Promise instance that resolves with the data
        console.log( typeof Ajax.makeAjaxRequest );

        Ajax.makeAjaxRequest.mockResolvedValue({
            email: 'john.doe@example.com',
            authToken: '121esdvwf313'
        });

        // act
        login( email, password );

        // assert
        // [0][]0] -> first zero is to indictae the first call to the function
        // [0][]0] -> second zero is to indictae the first argument to the function
        expect( Ajax.makeAjaxRequest.mock.calls[0][0] ).toEqual({
            method: 'POST',
            endpoint: 'login',
            body: {
                email,
                password
            }
        });
    });
});