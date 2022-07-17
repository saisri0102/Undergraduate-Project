const john={
    name:'John'
};

console.log(john);

// does this object have a prototype ?If so what is the constructor?
// john.__proto__.constructor is "Object"

console.log(john.__proto__); // this is Object.prototype (Default)  


function Person(name,age){
    this.name= name;
    this.age=age;
}

const jane = new Person('Jane', 32);
console.log(jane.__proto__); // Person

