/**
 * . Define an Employee class with id (number), name (string), role (string), department (string),
projects (array of Projects). Define some Employee objects (suggest using sample data
below).
```
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ]
);
const mark = new Employ
 */

class Employee{

    //ES2018 feature (class properties suntax - setting up properties outside of methods)

    constructor(id, name,role,dept,projects){
        this.id=id;
        this.name=name;
        this.role=role;
        this.dept=dept;
        this.projects=projects;
    }


}

class Project{
    constructor(id,name,client) {
        this.id=id;
        this.name=name;
        this.client=client
    }
}

const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );

const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ])

console.log(john);
console.log(jane);