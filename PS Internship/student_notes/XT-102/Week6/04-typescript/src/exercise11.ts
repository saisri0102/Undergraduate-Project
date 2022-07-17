/**
 * Define a Project class with id (number - public), name (string - public), client (string -
private). Define some Project objects (suggest using sample data below).
```

const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );
 */

 class Project{
     id: number;
     name: string;
     private client: string;

     constructor(id: number, name: string,client: string){
         this.id=id;
         this.name=name;
         this.client=client
     }

 }


 const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
 const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );

