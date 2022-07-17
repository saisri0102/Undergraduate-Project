interface IPerson {
    age: number,
    celebrateBirthday: () => void
}

// an interface can "inherit" from another interface
interface IEmployee extends IPerson {
    role: string,
    promote: ( newRole : string ) => void
}

// we "implement" the IEmployee interface
class Employee implements IEmployee {
    name: string;
    age: number; // can be initialized here too instead of constructor
    role: string;

    constructor( name:string, age : number, role : string ) {
        this.name = name;
        this.age = age;
        this.role = role;
    }

    celebrateBirthday() {{}
        this.age++;
    }

    promote( newRole : string ) {
        this.role = newRole;
    }
}

export {}