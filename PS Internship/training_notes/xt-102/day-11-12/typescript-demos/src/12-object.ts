type Person = {
    name: string,
    readonly age: number, // cannot be modified - like const, but for properties
    spouse?: string // optional property - may or may not exist
};

let john : Person;

john = {
    name: 'John',
    age: 32
};

john.spouse = 'Jane';

// error
// john.city = 'Bangalore'; // error

let jane : Person = {
    name: 'Jane',
    age: 28
};

// error
// jane.age++; // error -> we cannot modify a read-only property of an object

export {}