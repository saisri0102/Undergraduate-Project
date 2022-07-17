class EmployeesCollection {
    constructor() {
        this.employees = [];
    }

    getEmployeeById( id ) {
        return this.employees.find( employee => id === employee.id );
    }

    addEmployee( employee ) {
        this.employees.push( employee );
    }
}

module.exports = {
    EmployeesCollection
};