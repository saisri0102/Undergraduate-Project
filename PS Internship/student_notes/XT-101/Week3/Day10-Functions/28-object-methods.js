
/**
 * Can can add and edit and remove the properties of object after declaration also
 * Methods are added as values using the function  expression syntax
 * Methods are nothing but properties whose value is a function
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
    "fav color": 'crimson', // you must use quotes when keys has special characters
    setFavColor: function(newColor){
       // john["fav-color"]= newColor; // NOT GOOD TO USE. Because if we change the name of object then we  need to change here also 
        this["fav color"]= newColor;
    }
};

john.setFavColor('goldenrod');
console.log(john);

// error
// jonathon.setFavColor('goldenrod'); // ReferenceError: jonathon is not defined
// console.log(jonathon);
