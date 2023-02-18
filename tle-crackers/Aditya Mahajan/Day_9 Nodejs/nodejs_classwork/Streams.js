var fs = require('fs')
var data =" ";
var readerStream = fs.createReadStream('input.txt')
readerStream.setEncoding('utf-8')

readerStream.on('data',function(chunk){
    data+=chunk;
});

readerStream.on('end',function(){
    console.log(data);
});
readerStream.on('error',function(err){
    console.log(err.stack)
});
console.log("--------------------------------------")
// var writeData = "khopdi tod sale ka";

// var writeStream = fs.createWriteStream('input.txt');
// writeStream.write(writeData,'utf-8')
// writeStream.end;

// writeStream.on('finish',function(){
//     console.log("data write complete");
// });

// writeStream.on('error',function(err){
//     console.log(err.stack)
// });