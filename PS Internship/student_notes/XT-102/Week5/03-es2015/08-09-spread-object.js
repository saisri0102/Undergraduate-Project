const john={
    name:'John',
    age:32,
    address:{
        city:'Bangalore',
        pincode: 560101
    },
    emails: [
        'john@example.com',
        'jane@example.com'
    ]
};

const johnCopy={
    ...john,
    age: 33
};

console.log(johnCopy); 
/**
 * {
  name: 'John',
  age: 33,
  address: { city: 'Bangalore', pincode: 560101 },
  emails: [ 'john@example.com', 'jane@example.com' ]
}
 */



johnCopy.name= 'Jonathan'; // does not modify john.name (name is primitive)
johnCopy.address.city = 'Gurgaon'; // also modify john.address.city (john.address.city, johnCopy.address.city points to same data now )

console.log('John =', john);
console.log('JohnCopy',johnCopy);

console.clear();

johnCopy.address={ // johnCopy has  property address (johnCopy.address references a different object now)
    city: 'Hyderabad', // so dont modify john 
    pincode: 460101
};

console.log('john= ', john); 
console.log('johnCopy =', johnCopy);


// EXERCISE
// How to create a copy where email and address have copies of the original email and address
const johnProperCopy= {
    ...john,
    address: {
        ...john.address
    },
    emails: [...john.emails]
   
};

console.log(johnProperCopy);
johnCopy.address.city = 'Noida'; 
console.log('John=',john)
console.log('JohnCopy=',johnCopy);
console.log('Johnpropercopy=' ,johnProperCopy);
/**
 *
    John= {
    name: 'John',
    age: 32,
    address: { city: 'Gurgaon', pincode: 560101 },
    emails: [ 'john@example.com', 'jane@example.com' ]
    }
    JohnCopy= {
    name: 'Jonathan',
    age: 33,
    address: { city: 'Noida', pincode: 460101 },
    emails: [ 'john@example.com', 'jane@example.com' ]
    }
    Johnpropercopy= {
    name: 'John',
    age: 32,
    address: { city: 'Gurgaon', pincode: 560101 },
    emails: [ 'john@example.com', 'jane@example.com' ]
    }
 */