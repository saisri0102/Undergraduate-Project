// A file which has import / export is called a "module"
import Intern , { sum as add, diff } from './Employee.js';
// import { sum } from './arithmetic.js';

const john = new Intern( 'John', 32, 'Web Developer', 'IT' ); // args -> [ 'John', 32 ]

john.celebrateBirthday();
john.setNickname( 'Johnny' );
john.promote();
console.log( john );

console.log( Intern.getNationality() );