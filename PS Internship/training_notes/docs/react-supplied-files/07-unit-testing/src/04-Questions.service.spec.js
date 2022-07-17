// @todo Mock axios

describe( 'Questions service', () => {
    it( 'get() makes an axios call to fetch questions', () => {
        // @todo Set this as the mock resolved value of axios.get()
        /*
        const response = {
            data: {
                items: [
                    { title: 'How to pass data during routing?' },
                    { title: 'Best way to handle errors in React' }
                ]
            }
        };
        */
        
        // If a promise is returned from a unit test, Jest waits for it to resolve/reject before moving to the next unit test (similar to calling done())
        // @todo Return the promise returned by Questions.get() - you can chain it to a then before doing so - conduct tests within the then handler (check that axios.get is called once - mock.calls.length, the right URL is passed to it, and response is as expeced)
        return Questions.get()
                    .then(questions => {
                        expect( axios.get.mock.calls.length ).toBe( 1 );
                        expect( axios.get.mock.calls[0][0] ).toBe( 'https://api.stackexchange.com/2.0/questions?site=stackoverflow' );
                        expect( questions ).toEqual( response.data.items );
                    })
    })
});