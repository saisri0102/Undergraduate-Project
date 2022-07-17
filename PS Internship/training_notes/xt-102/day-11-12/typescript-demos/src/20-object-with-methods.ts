type Person = {
    name: string,
    readonly age: number, // cannot be modified - like const, but for properties
    spouse?: Person, // optional property - may or may not exist
    changeName?: ( name : string ) => void,
    marry: ( person : Person ) => void
};

function changeName( this : Person, name : string ) {
    this.name = name;
}

function marry( this : Person, person : Person ) {
    this.spouse = person;
    person.spouse = this;
}

let john : Person;

john = {
    name: 'John',
    age: 32,
    changeName,
    marry
};

// error
// john.city = 'Bangalore'; // error

let jane : Person = {
    name: 'Jane',
    age: 28,
    marry
};

john.marry( jane );

// error
// jane.age++; // error -> we cannot modify a read-only property of an object

export {}