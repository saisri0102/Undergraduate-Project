// import Employee from './Employee.js';
const { Employee } = require( './Employee.js' );

test( 'Employee constructor creates an object with name and id properties', function() {
    const john = new Employee( 'John', 123 );

    expect( john ).toMatchObject({
        name: 'John',
        id: 123
    });
});