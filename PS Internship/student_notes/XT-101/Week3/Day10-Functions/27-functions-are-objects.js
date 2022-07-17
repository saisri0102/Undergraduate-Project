
/**
 * Can can add and edit and remove the properties of object after declaration also
 */
const john={
    name: 'John',
    Age: '34', 
    emailIds:[
        'john@example.com',
        'jane@example.com'
    ],
    address:{
        city:'Bangalore',
        pincode: '560101'

    },
    "fav color": 'crimson' // you must use quotes when keys has special characters
};

john.birthday ='2000-12-15';

console.log(john);


delete john['Age']; // delete john.age is also fine

// when accessing / adding / editing / deleting keys which have special characters in key name, you must use [] notation 

john['fav-color']= 'olive';

console.log(john.xyz); // undefined
console.log(john);
// error
// console.log(john.xyz.abc); // TypeError: Cannot read property 'abc' of undefined

john.children = [
   'mark',
   'jone'
]
console.log(john);
console.log(john.children[0]);
console.log(john.address);