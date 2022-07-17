// Date (class / Constructor function)
// Includes date and time

const today = new Date(); 
console.log(today); // 2021-02-09T05:52:00.241Z

// 0-> jan, 11->Dec
// we can pass h,m,a, milliseconds into date object
const republicDay = new Date(2021,0, 26);
console.log(republicDay); // UK time 2021-01-25T18:30:00.000Z
console.log(republicDay.toLocaleDateString()); // 1/26/2021
console.log(republicDay.toUTCString()); // Mon, 25 Jan 2021 18:30:00 GMT
console.log(republicDay.toISOString()); // standard  2021-01-25T18:30:00.000Z
console.log(today.toDateString());  // Sun Feb 14 2021

console.log(today.getDate());
console.log(today.getDay());
console.log(today.getFullYear());
console.log(today.getHours());
console.log(today.getMinutes());
console.log(today.getMilliseconds());
console.log(today.getTime()); // No.of milliseconds Since jan 1st 1970 

const fifteenthOfCurrentMonth = new Date();
fifteenthOfCurrentMonth.setDate(15);

console.log(fifteenthOfCurrentMonth);
console.log(fifteenthOfCurrentMonth.getDay()); // 1-Monday (0- sunday)

// Exercise : which day was I born ??

const Birthday= new Date(1999,11,9); 
console.log(Birthday.getDay()); // 4- Thursday
 
const tommorow = new Date(); // Today is 2/9/2021
tommorow.setDate(tommorow.getDate()+1); // 2/10/2021
console.log(tommorow.toLocaleDateString());

const todayPlus20 = new Date();
todayPlus20.setDate(todayPlus20.getDate()+20); // 3/1/2021
console.log(todayPlus20.toLocaleDateString());