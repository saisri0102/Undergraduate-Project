/**
 * Define an Employee class with id (number - public), name (string - public), department
(string - public), projects (array of Projects - private). Use the access specifiers in
constructor arguments to setup the initial values for data members automatically. Define
some Employee objects (suggest using sample data below).
```
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ]
);
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [
intranetDeployment ] );
 */

// class Project{
//     id: number;
//     name: string;
//     private client: string;

//     constructor(id: number, name: string,client: string){
//         this.id=id;
//         this.name=name;
//         this.client=client
//     }

// }


class Employee  {

    id: number;
    name : string;
    role : string;
    dept: string;
   private projects : Project[] ;

   constructor(id:number, name:string, role:string, dept:string, projects: Project[]){
       this.id=id;
       this.name=name;
       this.role=role;
       this.dept= dept;
       this.projects= projects;
   }
 

}
// const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
// const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );
const john = new Employee( 1, 'John', 'Web Developer', 'IT', [ dbsPayroll ] );
const jane = new Employee( 2, 'Jane', 'Project Manager', 'IT', [ dbsPayroll, intranetDeployment ]
);
const mark = new Employee( 3, 'Mark', 'System Administrator', 'Operations', [intranetDeployment ] );

export {}