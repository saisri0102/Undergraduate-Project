
/**
 *  This modules helps me not to include all the script files in html page 
 * It is enough to include index.js (no need to include employee.js and person.js)
 * this js is depending on Employee class which is present in Employee.js
 * A file which has import or export statement is called module
 * All modules are by default not global 
 * Before this modules we have to use module pattern , namespace or revealing module pattern for making not variable global
 * 
 *  Now those patterns are not required instead we can use module 
 */

// syntax:  import ___ from './Employee.js';
// if we are importing any default thing then keep to outside {}
// Ex: here employess is my default export in employee. js file 
// so keep Employee outside {}
// Default exports are outside braces and we can give any name we want for that
// Ex: I can give name Intern instead of Employee
// NOTE: make sure only one default 

 import Employee , {sum as add, diff} from './Employee.js';

// sum as add means we are renaming sum to add
const john = new Employee ('john',32 , 'Web developer', 'IT' ); // args --> ['john',32];
john.celebrateBirthday();
john.setNickName('jonny');
john.promote();


console.log(Employee.getNationality());
console.log(john);

console.log(add(2,3));
console.log(diff(5,3));

