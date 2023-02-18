
const  prompt = require('prompt')
const  http =require('http');

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});

function swap(){
  //take input from the users
let a = 12;
let b = 11;
//create a temporary variable
let temp;
//swap variables
temp = a;
a = b;
b = temp;

res.end(
    console.log(`The value of a after swapping: ${a}`),
    console.log(`The value of b after swapping: ${b}`)
);
}
}).listen(8088)
console.log("Server Running")