var fs = require("fs");
var data = '';

var readerStream = fs.createReadStream('input.txt');


// Set the encoding to be utf8.
readerStream.setEncoding('UTF8')
readerStream.on('data',function(chunk){
data += chunk;
})

readerStream.on('end',function(chunk){
    console.log(data);
    })


    readerStream.on('error',function(error){
        console.log(error.stack);
        })
    

   console.log('end ofprog');


