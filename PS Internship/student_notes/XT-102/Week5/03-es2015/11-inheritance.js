class Person{

    //ES2018 feature (class properties suntax - setting up properties outside of methods)

    nationality = Person.getNationality();
    constructor(name,age){
        this.name=name;
        this.age=age;
    }

    static getNationality(){ // static is associated with class
        return 'Indian';
    }

    celebrateBirthday(){
        this.age++;
    }
    setNickName(nickname){
        this.nickname= nickname;
    }

    setAge= (newAge) => {
        this.age= newAge;
    }

}

class Employee extends Person{
// default constructor
    // constructor(...args){ // using rest operator ['john',32];
    //     super(...args) // spread - john, 32
    // }

    // constructor(role,dept, ...args){ // can use this method or below 
    //     super(args);
    // }
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
const john = new Employee('john',32 , 'Web developer', 'IT' ); // args --> ['john',32];
john.celebrateBirthday();
john.setNickName('jonny');
// john.setAge(40);
john.promote();
console.log(Person.getNationality());

console.log(john);