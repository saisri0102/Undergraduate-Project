/**
 *
The valid SSN (Social Security Number) must satisfy the following conditions: 
It should have 9 digits.
It should be divided into 3 parts by hyphen (-).
The first part should have 3 digits and should not be 000, 666, or between 900 and 999.
The second part should have 2 digits and it should be from 01 to 99.
The third part should have 4 digits and it should be from 0001 to 9999.
 */

const regex= new RegExp( "^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$");

/**
 * (?!666|000|9\\d{2}) - represents the first 3 digits should not start with 000, 666, or between 900 and 999.
 */