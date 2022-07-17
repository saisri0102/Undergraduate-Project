const http = require('http');
const fs = require( 'fs' );
const qs = require('querystring');
const { parse } = require('path');

const server = http.createServer(function(req, res){
    const url = req.url;
    console.log(url);

    if(url === '/'){
        let rs = fs.createReadStream('index.html');
        rs.on( 'data', function( chunk ) {
            res.write( chunk.toString());
        });
        
        rs.on( 'end', function() {
            console.log( 'completed reading the file' );
            res.end();
        });
        rs.read();
    }

    else if(url === '/contact'){
        let rs = fs.createReadStream('contact.html');
        rs.on( 'data', function( chunk ) {
            console.log( '*** data event has fired ***' );
            res.write( chunk.toString());
        });
        
        rs.on( 'end', function() {
            console.log( 'completed reading the file' );
            res.end();
        });
        rs.read();
       
    }
    
    else if(url === '/message' && req.method === 'POST'){
        const requestBody = [];
        res.setHeader("Content-Type", "application/json");

        req.on('data', (chunks)=>{
           requestBody.push(chunks);
        });      

        req.on('end', ()=>{  
            
            const parsedData = Buffer.concat(requestBody).toString();
            var jsonData = qs.parse(parsedData);
            console.log(jsonData);
            fs.writeFileSync('message.json',JSON.stringify(jsonData));
           res.write(JSON.stringify(jsonData)); 
         });
    }

});

server.listen('8080');