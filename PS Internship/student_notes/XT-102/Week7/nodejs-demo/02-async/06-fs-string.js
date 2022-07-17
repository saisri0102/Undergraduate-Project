// filesystem - readin/writing files/folders
const fs = require('fs');

// non-blocking (will not prevent the next line from executing)
// asynchronus ( operation can complete anytime)
// by default output is buffer (byte array)
// include 'utf-8' as second argument so it converts byte array to text
fs.readFile('../node-js.md', 'utf-8', function( error , contents){
    if(error){
        console.log(error.message);
        return;
    }
    console.log(contents);
});

console.log('end of script');
