const employees = [
    {
        name: 'John',
        dept: 'Finance',
        experience: 5
    },
    {
        name: 'Jane',
        dept: 'IT',
        experience: 3
    },
    {
        name: 'Mark',
        dept: 'Sales',
        experience: 15
    },
    {
        name: 'Mary',
        dept: 'Finance',
        experience: 12
    }
];

// do something on every item - forEach()
employees.forEach(function( employee, index, array ) {
    employee.bonusShares = employee.experience * 10;
    console.log( `${employee.name} works in ${employee.dept} department ${index}` );
    console.log( array ); // the entire array
});

// filter() - smaller subset
const seniorEmployees = employees.filter(function( employee /* ,index, array */ ) {
    return employee.experience >= 10;
});
console.log( seniorEmployees ); // since array has objects, the 2 arrays have the same 2 shared objects

// map() - create new array where every item in the original array has a corresponding item in the new array
const employeeNames = employees.map(function( employee ) {
    return employee.name;
});
console.log( employeeNames );

// reduce()