buf = new Buffer(256);
len = buf.write("Simply Easy Learning");

console.log("Octets written : "+  len);

console.log("------------------------------")
var buffer1 = new Buffer('TutorialsPoint ');
var buffer2 = new Buffer('Simply Easy Learning');
var buffer3 = Buffer.concat([buffer1,buffer2]);

console.log("buffer3 content: " + buffer3.toString());