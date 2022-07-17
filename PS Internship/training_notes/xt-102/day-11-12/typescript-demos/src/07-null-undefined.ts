// null, undefined types are not used independently - used in a union type usually

let x : null;
x = null; // null is the only value allowed for the null data type
// x = 1; // error

let y : undefined;
y = undefined; // undefined is the only value allowed for the undefined data type
// y = 1; // error

export { }