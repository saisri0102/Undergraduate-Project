const http = require('http');
const fs = require('fs');

let workshops ;
fs.readFile('./workshops.json', 'utf-8' , function(error, contents){
    workshops = JSON.parse(contents);
});

const server = http.createServer(function(req, res){
    const url = req.url;
    console.log(url);
 
    if(url === '/workshops' && req.method.toUpperCase() ===  'GET' ){
        console.log('reading files');
        res.end(JSON.stringify(workshops));   
    }

    else if(url === '/workshops' && req.method.toUpperCase() ===  'POST'){
     
        const requestBody =  [];
        req.on('data', (chunks)=>{
            requestBody.push(chunks);
         });      
 
         req.on('end', ()=>{  
             
             const workshopStr = Buffer.concat(requestBody).toString();
             const workshopObj = JSON.parse(workshopStr);
             console.log(workshopObj);
             workshops.push(workshopObj);
             const ws = fs.createWriteStream('workshop.json');
             ws.write(JSON.stringify(workshops));
             ws.end();
             res.end(workshopStr); 
           

        });

    }
    else {
        res.end( 'unsupported' );
    }
});

server.listen( '8080' );
