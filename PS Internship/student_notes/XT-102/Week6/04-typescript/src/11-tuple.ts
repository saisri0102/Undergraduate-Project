// an array of fixed length
// you specify the data type for each item in the array


// tuple restricts the type
type PersonTuple = [ string, number , string]
let johnDetails = ['John' , 32 , 'Jane']; // inferrd type = string | number

let janeDetails : PersonTuple = ['Jane' , 28 , 'John'];

johnDetails[1] = 'Thirty two'

// ERROR
// we cannot  do this now, which we could do if we did not restrict to PersonTuple
// janeDetails[1] = 'Thirty two' // Type 'string' is not assignable to type 'number'.

janeDetails.pop();
janeDetails.push(45); // does allow