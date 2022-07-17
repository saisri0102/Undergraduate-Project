import {Person} from './Person.js'

export /* default */ class Employee extends Person{
        constructor(name,age,role,dept){
            super(name,age);
            this.role=role;
            this.dept=dept;
        }
    
        promote(){
            this.role= `Senior ${this.role}`;
        }
        celebrateBirthday(){
            // To inherit base class method using super.method();
            super.celebrateBirthday();
            console.log(`Happy Birthday ${this.name}`);
        }
    
    }
    export const sum = (x,y) => x+y;
    export const diff = (x,y) => x-y;
    const multiply = (x,y) => x*y;
    const divide = (x,y) => x/y;

    // another way of exporting and it makes easier for me what are the methods are varibles i am exporting
    // Note: we should have only one default export 

   // export default Employee; // 2nd way of default (first way is making default during declaration)
    export {
        Employee as default,  // 3rd way
        multiply,
        divide
    }