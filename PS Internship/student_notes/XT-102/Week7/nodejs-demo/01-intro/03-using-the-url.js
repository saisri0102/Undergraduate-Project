/**
 *
 */
// Including http module - capability to send, receive response 
const http = require('http');

// creating server - we create a server and say what to do when an HTTP request is received

const server = http.createServer(function (req, res) {
    // a string - for a request http://localhost:8080/api/teams, it is api/teams
    console.log(req.url);
    if(req.url === '/api/teams')
    {
        res.write('hello teams : Group A');
    }
    else if(req.url === '/api/meetings')
    {
        res.write('Hello meetings');
    }
        
    else
    {
        res.write('Hello world');
    }
    res.end();
})

// start the server, and it will "listen" on port 8080
server.listen( 8080 ) // continues 
console.log('end of script');


/** Here using nodewe have to stop and restart everytime when we do some modification in the code 
 * Instead we can use nodemon tool which automatically restarts again after changes in the file
*/