type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';

type NumberOfString = number | string;
const array = []; // type: any
array.push(1);
array.push('hello');

//creating an array of string
const days : string[]=[];
const weekDays : Array<Weekday>= [];

const number : NumberOfString[] = [];

weekDays.push('Mon');
weekDays.push('Thu');
weekDays.push('Fri');
//weekDays.push('Sun') /// ERROR Sun is not there in Weekday

number.push(1);
number.push('Two');
number.push(3);

export {}

