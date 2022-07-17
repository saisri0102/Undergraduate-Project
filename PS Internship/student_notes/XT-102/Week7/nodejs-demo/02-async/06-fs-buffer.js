// filesystem - readin/writing files/folders
const fs = require('fs');

// non-blocking (will not prevent the next line from executing)
// asynchronus ( operation can complete anytime)
// by default output is buffer (byte array)
// include 'utf-8' as second argument so it converts byte array to text
fs.readFile('../node-js.md',  function( error , contents){
    if(error){
        console.log(error.message);
        return;
    }
    console.log(contents);
});

console.log('end of script');

fs.readFile('../node-js.md',function( error , contents){
    if(error){
        console.log(error.message);
        return;
    }
    // Buffer toString()  converts buffer to utf-8 string by default
    console.log(contents.toString('utf-8')); // the argument is not necessary 
});

console.log('end of script');