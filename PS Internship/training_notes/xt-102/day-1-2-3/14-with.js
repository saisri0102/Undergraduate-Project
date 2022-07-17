const john = {
    name: 'John',
    age: 32
};

const name = 'Jane'

// messes up with variables in scope
with( john ) {
    console.log( name );
    console.log( age );
}