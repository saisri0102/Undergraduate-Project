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
    // name: string;
    // age: number; // can be initialized here too instead of constructor
    // role: string;
    // private spouse: string;
    // readonly children?: string[]; // cannot change once it is set in constructor

    constructor(
        public name: string, 
        public age : number, 
        public role : string, 
        private spouse : string = '', 
        public readonly children? : string[] 
    ) {
        // this.name = name;
        // this.age = age;
        // this.role = role;
        // this.spouse = spouse;
        
        if( children ) {
            this.children = children;
        }
    }

    celebrateBirthday() {
        this.age++;
    }

    promote( newRole : string ) {
        this.role = newRole;
    }
}

const john = new Employee( 'John', 32, 'Accountant', 'Jane', [ 'Mark', 'Mary' ] )
john.promote( 'Senior Accountant' );
john.celebrateBirthday();

console.log( john );
// console.log( john.spouse ); // error - spouse is a private data member

export{}