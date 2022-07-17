// ES2015 introduced class keyword for defining classes
//  classes are like blueprint or templates for creating objects

class Person{
    constructor(name, emailids, address){
       this.name= name;
       this.emailids= emailids;
       this.address = address;
    //    this.addEmailId = addEmailId;

   } 
   // Methods are shared among all the objects of the class
    addEmailId(emailid ){ // global function 
    this.emailids.push(emailid);
   }
}

class Employee extends Person{
    constructor(name, emailids, address, role, dept) {
         super(name, emailids, address); // parent constructor is called
         this.role=role;
         this.dept= dept;
    }

    promote(){
        this.role= `Senior ${this.role}`;
    }
}

const john = new Person( // It is like creating object for constructor function
    'John', 
    [
        'john@example.com', 
        'jane@example.com'
    ], 
    {
        city: 'Bangalore', 
        pinCode:560101
    }
);

const jane = new Employee(
    'Jane', 
    [
        'john@example.com', 
        'jane@example.com'
    ], 
    {
        city: 'Chennai', 
        pinCode:660101
    },
    'Web Developer',
    'cse'
);

john.addEmailId('john@yahoo.com');
jane.addEmailId('jane@yahoo.com');

jane.promote();
console.log(john);
console.log(jane);

