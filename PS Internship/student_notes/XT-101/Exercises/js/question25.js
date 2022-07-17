
// Question
/*Given the following array, solve the questions that follow using appropriate array iterator
methods (forEach, find, filter, map)
```
var phones = [
 { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung'
},
 { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
 { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
 { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
 { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
 { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
];
```
* Create a new array with the name of each phone. Thus the new array that should be generated
would be [ 'Samsung Galaxy S10+ Plus', 'Apple iPhone 7 Plus', ... ]
* Create a new array with objects representing new phones
* Find all the phones whose price is less than $440 and print them.

*/

var phones = [
    { name : 'Samsung Galaxy S10+ Plus', price: 620, type: 'refurbished', manufacturer: 'Samsung'},
    { name : 'Apple iPhone 7 Plus', price: 450, type: 'refurbished', manufacturer: 'Apple' },
    { name : 'One Plus 6', price: 430, type: 'new', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone Xs', price: 910, type: 'new', manufacturer: 'Apple' },
    { name : 'One Plus 7', price: 430, type: 'refurbished', manufacturer: 'OnePlus' },
    { name : 'Apple iPhone 8 Plus', price: 610, type: 'new', manufacturer: 'Apple' },
   ];

var PhoneNames= [];
phones.forEach(function(phone){
     PhoneNames.push(phone.name);
});

console.log(PhoneNames);

var newPhones= phones.filter(function(phone){
    return phone.type=='new';
});

console.log(newPhones);

var phonesLessCost = phones.filter(function(phone){
    return phone.price< 440;
});

console.log(phonesLessCost);
   