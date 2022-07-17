function Person(name, age){
    this.name=name;
    this.age=age;

    // "method is a property of an objectt whose value is a function"
    // this way of adding a method, creates a new local function every time new Person() is called, and assign it to celebrateBirthday
    //this.celebrateBirthday= function(){
      //  this.age++;
    //}
}

// add methods to constructor functions prototype property so that all objects created will share these methods
// so here celebrateBirthday is set on prototype which shares among al ojects .( So saves space as no local elements gets created everytime when we create new object)
Person.prototype.celebrateBirthday= function(){
    this.age++;  
}
const john = new Person('john',32);
const jane= new Person('jane', 28);

john.celebrateBirthday();
john.celebrateBirthday();

//console.log(john.celebrateBirthday === jane.celebrateBirthday) // false when celebrateBirthday is inside the Person
// whenever a new object is created then the inner elements also created locally 
