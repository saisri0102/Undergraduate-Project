class Project{
    id: number;
    name: string; 
    private client: string;
    constructor( id: number, name : string, client : string = '') {
        this.id = id;
        this.name = name;
        this.client = client;
    }
}

class Employees{
    id: number;
    name: string;
    department:string;
    private projects: Project[];
    constructor( id: number, name : string, department:string, projects:Project[]) {
        this.projects = projects
        this.id = id;
        this.name = name;
        this.department = department;
    }
}

const dbsPayroll = new Project( 1001, 'DBS payroll', 'DBS' );
console.log(dbsPayroll);
const intranetDeployment = new Project( 2001, 'Intranet v2 deployment', 'Internal' );
console.log(intranetDeployment);