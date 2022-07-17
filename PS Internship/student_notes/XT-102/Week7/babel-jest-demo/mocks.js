/**
 * # Some Important mock matchers



Example: 
    const mockCallback = jest.fn(x => 42 + x);
    forEach([0, 1], mockCallback);

    // The mock function will be called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // 0 was the first argument of the first call to the function 
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // 1 was the first argument of the second call to the function
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // 42 was the return value of the first call to the function
    expect(mockCallback.mock.results[0].value).toBe(42);

    //
     // this is the object returned by the first instantiation of this function
        had a `name` property whose value had been set to 'test'
            expect(someMockFunction.mock.instances[0].name).toEqual('test');

- mockCallback.mock.calls.length -> Returns No.of times mockCallback is called
- mockCallback.mock.calls[0][0] -> checks the first argument in the first call
- mockCallback.mock.calls[1][0] -> checks the first argument in the second call
- mockCallback.mock.results[0].value -> gives the result of the first call
 */

/**
 * Mock Return Values
        * const myMock = jest.fn();
        console.log(myMock());
        // > undefined

        myMock
        .mockReturnValueOnce(10)
        .mockReturnValueOnce('x')
        .mockReturnValue(true);

        console.log(myMock(), myMock(), myMock(), myMock());
        // > 10, 'x', true, true
 */

/**
 * Mocking Modules
 * 
 * // users.js
        import axios from 'axios';

        class Users {
        static all() {
            return axios.get('/users.json').then(resp => resp.data);
        }
        }

        export default Users;
    // 
    // users.test.js
        import axios from 'axios';
        import Users from './users';

        jest.mock('axios'); // mocking axios 

        test('should fetch users', () => {
        const users = [{name: 'Bob'}];
        const resp = {data: users};
        axios.get.mockResolvedValue(resp);

        // or you could use the code below depending on your use case:
        //  axios.get.mockImplementation(() => Promise.resolve(resp))

        return Users.all().then(data => expect(data).toEqual(users));
});
 */

/**
 * MOCK IMPLEMENATION 
 * There are some cases where it is useful to go beyond the ability to specify return values and full-on replace the implementation of a mock function. You can do this with jest.fn or with the mockImplementationOnce method on mock functions.
 * 
 * // USING FN
 *  const myMockFn = jest.fn(cb => cb(null, true))
    myMockFn((err, val) => console.log(val));
    // > true

    //The mockImplementation method is very useful when you need to define the default implementation of a mock function that is created from another module:

        // foo.js
        module.exports = function() {
        // some implementation;
        };

        // test.js
        jest.mock('../foo'); // this happens automatically with automocking
        const foo = require('../foo');

        // foo is a mock function
        foo.mockImplementation(() => 42);
        foo();
        // > 42

        // When you have to recreate a complex behavior of a mock function such that multiple function calls will produce different results, you should use the mockImplementationOnce method:

        const myMockFn = 
        jest.fn()
            .mockImplementationOnce(cb => cb(null, true))
            .mockImplementationOnce(cb => cb(null, false));

            myMockFn((err, val) => console.log(val));
            // > true

            myMockFn((err, val) => console.log(val));
            // > false


 */

/** 
 * MOCK NAMES
 * Optionally you can provide a name for your mock functions, this will be displayed instead of "jest.fn()" in test error output. You should use this if you want to be able to quickly identify the mock function reporting an error in your test output.
    * const myMockFn = jest
    .fn()
    .mockReturnValue('default')
    .mockImplementation(scalar => 42 + scalar)
    .mockName('add42');
 */