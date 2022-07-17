const axios = require('axios');
const Users = require('./users');

jest.mock('axios');

test('should fetch users', () => {

    const users = [{
        "id": 1,
        "first_name": "Robert",
        "last_name": "Schwartz",
        "email": "rob23@gmail.com"
    }, {
        "id": 2,
        "first_name": "Lucy",
        "last_name": "Ballmer",
        "email": "lucyb56@gmail.com"
    }];

    const resp = { data : users };

    // This is the response that the mocked module will return.

    axios.get.mockImplementation(() => Promise.resolve(resp)); 

// The mocked implementation returns a promise with the response.
    Users.all().then(resp => expect(resp.data).toEqual(users)); 
});