import { Person } from './Person.js';

// public (can be imported)
export /*default */ class Employee extends Person {
    constructor( name, age, role, dept ) {
        super( name, age );

        this.role = role;
        this.dept = dept;
    }

    promote() {
        this.role = `Senior ${this.role}`;
    }

    celebrateBirthday() {
        // we can call any base class method using super.method()
        super.celebrateBirthday();
        console.log( `Happy birthday ${this.name}` );
    }
}

// export const sum = ( x, y ) => x + y;
// export const diff = ( x, y ) => x - y;
const sum = ( x, y ) => x + y;
const diff = ( x, y ) => x - y;

const multiply = ( x, y ) => x * y;
const divide = ( x, y ) => x / y;

// export default Employee;

export {
    Employee as default,
    sum,
    diff
};
