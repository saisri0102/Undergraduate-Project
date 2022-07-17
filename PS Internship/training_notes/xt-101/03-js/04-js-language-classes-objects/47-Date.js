// Date (class / constructor function)
// includes date and time
const today = new Date();
console.log( today );

// 0 -> Jan!, 11 -> Dec
// you can pass h, m, s, milliseconds too
const republicDay = new Date( 2021, 0, 26 );
console.log( republicDay );
console.log( republicDay.toLocaleDateString() );
console.log( republicDay.toUTCString() );
console.log( republicDay.toISOString() );

console.log( today.getDate() );
// 0 -> Sunday, 6 -> Saturday
console.log( today.getDay() );

// getHours(), getFullYear(), getMinutes()

// getTime();
console.log( today.getTime() );

const fifteenthOfCurrentMonth = new Date();
fifteenthOfCurrentMonth.setDate( 15 );

console.log( fifteenthOfCurrentMonth );
console.log( fifteenthOfCurrentMonth.getDay() );

// Exercise: which day was I born? Sunday / Monday / ...

const todayPlus20 = new Date();
todayPlus20.setDate( todayPlus20.getDate() + 20 );
console.log( todayPlus20 );