// if we give initial value , TS will infer the data type
let x=1; // type is inferred to a number

//ERROR
//x='hello' // error since TS already infered x is number

//explicit type
let y:number;
y=1;


//y='hello'; //ERROR

export {}