// an array of fixed length
// you separately specify the data type for each item in the array

type PersonTuple = [ string, number, string ];

const johnDetails : PersonTuple = [ 'John', 32, 'Jane' ];
const janeDetails = [ 'Jane', 28, 'John' ];

// we cannot do this now, which we could do if we did not restrict to PersonTuple
// johnDetails[1] = 'Thirty two';

// not possible to catch the violation unless we run the code - not reported
johnDetails.pop();
johnDetails.push( 32 ); // does allow

// error
// johnDetails[2] = 32; // static code analysis can catch this error - hence reported

export {}