function identity<T>(arg: T) : T {
    return arg;
}

// explicit type binding to create a concrete function identity<string>
const result = identity<string>( 'hello' ); // TS knows that this

// implicit type binding - TS understands that T is number
const result2 = identity( 12 );