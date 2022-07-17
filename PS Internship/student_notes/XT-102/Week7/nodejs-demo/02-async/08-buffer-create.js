
const fs = require('fs');

const str = 'Hello, World नमस्ते दुनिया';
const buffer1 = Buffer.from('Hello, World नमस्ते दुनिया');
console.log(buffer1); 
/**
 * <Buffer 48 65 6c 6c 6f 2c 20 57 6f 72 6c 64 20 e0 a4 a8 e0 a4 ae e0 a4 b8 e0 a5 8d e0 a4 a4 e0 a5 87 20 e0 a4 a6 e0 a5 81 e0 a4 a8 e0 a4 bf e0 a4 af e0 a4 be>
 */
console.log(buffer1.length); // 50
console.log(str.length); // 26
// some times the length this may not be same as length og text given 
// due to length encoding

// H - 00101000 - 48H - 72d
// e - 00100101 - 65H - 

fs.writeFile('./hello-world.txt',buffer1, { encoding: 'utf-8' } , function(error){
    if(error){
        console.log('There was an error writing to the file');
        return;
    }

    console.log('file has been written');
})
