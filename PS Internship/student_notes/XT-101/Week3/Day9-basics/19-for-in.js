const john={  // Object is a collection of properties
    name: 'John',
    Age: '34', 
    emailIds:[
        'john@example.com',
        'jane@example.com'
    ],
    address:{
        city:'Bangalore',
        pincode: '560101'

    }
};
for(let key in john){
    // To go to key value pair 
    console.log(key);
    console.log(john[key]);
}