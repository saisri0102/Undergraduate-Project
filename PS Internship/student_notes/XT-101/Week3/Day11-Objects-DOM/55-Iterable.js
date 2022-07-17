// Arrays (array items), Strings (characters), Map (key-value pairs), Set (set items) are all iterables
// iterable interface to iterate through them

// for in loop is used for objects, for of is used for iterables

const numbers = new Set();
numbers.add(2);
numbers.add(5);
numbers.add(7);
numbers.add(23);
numbers.add(7); // not added duplicate
numbers.add(29);
numbers.add(13);
numbers.add(5); // not added duplicate

for(let item of numbers){
    console.log(item);
}