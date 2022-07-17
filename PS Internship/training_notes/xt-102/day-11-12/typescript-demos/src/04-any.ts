// type inferred is "any" - avoid at all cost (no point using TypeScript else)
let x;

x = 1; // number value
x = 'hello'; // string value
x = { // object
    name: 'John'
}

export {}