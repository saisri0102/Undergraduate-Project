// Arthimetic Operators : +,-,*, % , /,  **

let x=13, y=24;
console.log(x+y);
console.log(x-y);
console.log(x*y);
console.log(x/y) //0.5416666666666666
console.log(x%y) // modulo division for remainder
console.log(3**4) // x^y

// Relational operators (<,<=, >, >=, !=, ==, !==)
console.log(1<2);
console.log(1==2);
console.log(2==1+1);
console.log(2=='2'); // true // compares only value
console.log(2==='2') //false compared date value and type
console.log(2!==3); //true
console.log(2!=3);  // true
// !== <==> !(x==y)

// Logical Operators - !, &&, ||
const isRaining = true, doILikeToGetWet = false;
const shouldITakeUmbrella = isRaining && doILikeToGetWet;

console.log(shouldITakeUmbrella);
console.log(isRaining || doILikeToGetWet);
console.log(!isRaining);

console.clear();
console.log(3 && 4); // 4
console.log(3 & 4);// 0
console.log(3 || 4); // 3
console.log(3 | 4); //7
console.log(3 ^ 4); // 7

// Assignment + Arthimetic
x=x+1;
x+=1; // same as above
x-=1;
x*=1;
x/=1;
x**=2;
console.log(x);

// increment and decrement (post-pre-increment)

x= 34;
console.log(++x); //  increments and print 35
console.log(x++); // prints 35 and increments to 36

console.log(x--); // prints 36 and decrements to 35
console.log(--x); // decrement to 34 and print 34

// Ternery operator

let string = x>30? 'More than 30': 'Less than or equal to 30';
console.log(string);


// Presedence of operators
const result= 1+2*3/4 //  1+ (6/4) = 2.5 // *, /, +

console.log(result);
console.log(true || false && !true || true); //  !, && , ||