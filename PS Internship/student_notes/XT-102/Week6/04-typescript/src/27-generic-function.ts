function identity<T>(arg:T) : T{
    return arg;
}


// explicit type binding to create a concrete function identity<string>
const result3 = identity<string>('Hello');


const result4 = identity('Hello'); // TS Knows this

// implicit type binding - TS understands T is number 
const rsult5 = identity(12);