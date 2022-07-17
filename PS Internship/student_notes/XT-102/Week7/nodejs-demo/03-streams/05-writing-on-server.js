const http = require('http');

const fs = require('fs');

//let rs = fs.createReadStream(process.argv[2]);
//const ws = fs.createWriteStream(process.argv[3]);
// creating server - we create a server and say what to do when an HTTP request is received

const server = http.createServer(function (req, res) {

    console.log(req.url);
    let source = req.url;
 
         res.write('hello read file');
        let rs= fs.createReadStream(source);
        
        rs.on('data', function( error, chunk ){
        
            if(error){
                console.log(error.message);
                return;
            }
           // const ws = fs.createWriteStream('output.txt');
            //res.write('hello read file');
            rs.write( chunk);
            console.log('written ');
        });
        rs.on( 'end', function() {
            console.log( 'completed reading the file' );
            res.end();
        });

        rs.read();

    
 
     res.end();
});

// start the server, and it will "listen" on port 8080
server.listen( 8080 ) // continues 
console.log('end of script');


/** Here using nodewe have to stop and restart everytime when we do some modification in the code 
 * Instead we can use nodemon tool which automatically restarts again after changes in the file
*/