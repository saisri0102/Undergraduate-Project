const { Employee } = require( './Employee.js' );
const { EmployeesCollection } = require( './EmployeesCollection.js' );

test( 'addEmployee adds a new employee', function() {
    const john = new Employee( 'John', 123 );
    
    const employeesCollection = new EmployeesCollection();
    employeesCollection.addEmployee( john );

    const jane = new Employee( 'Jane', 124 );
    employeesCollection.addEmployee( jane );

    expect( employeesCollection.employees.length ).toBe( 2 );
});

test( 'getEmployeeById returns right employee when id is passed', function() {
    // arrange
    const john = new Employee( 'John', 123 );
    const jane = new Employee( 'Jane', 124 );
    
    const employees = new EmployeesCollection();
    employees.addEmployee( john );
    employees.addEmployee( jane );

    // act
    const match = employees.getEmployeeById( 124 );

    // assert
    expect( match ).toEqual( jane );
});