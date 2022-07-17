
const fs = require('fs');
const rs = fs.createReadStream(process.argv[2]);
const ws = fs.createWriteStream(process.argv[3]);

rs.on('data', function( chunk ){
  
    ws.write( chunk.toString());
    console.log('written ');
})

rs.on( 'end', function() {
    console.log( 'completed reading the file' );
    ws.end();
});

rs.read();

