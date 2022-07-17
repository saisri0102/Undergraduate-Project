// Constructor function - invoked with new operator 
// A constructor is a function that initializes or create an object
// Give first letter as captial for constructor function (PascalCase)
// 

function addEmailId(emailid ){ // global function 
    this.emailids.push(emailid);
}
function Person(name, emailids, address){
   
    console.log(this); // An empty object
  
       this.name= name; // name:name 
       this.emailids= emailids;
       this.address = address;
 
    //    this.addEmailId = function(emailid) {  // local function  not good
    //        this.emailids.push(emailid);
    //    }
     
        this.addEmailId = addEmailId;

     //  return this // No need automatically returns
}

// partial set of steps
/*
    1. An empty object is created by the runtime - { }
    2. The function is called with its "context" ("this ") referrring to that object.
    3. A constrcutor function (once called with "new") returns the context ("this - the newly created object")

*/

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

const jane = new Person(
    'Jane', 
    [
        'john@example.com', 
        'jane@example.com'
    ], 
    {
        city: 'Chennai', 
        pinCode:660101
    }
);

john.addEmailId('john@yahoo.com');
jane.addEmailId('jane@yahoo.com');
console.log(john);
console.log(jane);

