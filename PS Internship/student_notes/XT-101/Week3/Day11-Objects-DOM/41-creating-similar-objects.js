function createPerson(name, emailids, address){
  /*  return {
        name:name,
        emailids: emailids,
        address: address
    };
    */

    // above and below return statements are same
   return{
       name, // name:name 
       emailids,
       address
   };
}

const john = createPerson(
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

const jane = createPerson(
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

console.log(john);
console.log(jane);