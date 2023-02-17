// const { read, fstat } = require("fs");
// var http = require("http");
// //create a server object:
// http.createServer(function (request, response) {
//     response.write('Vishal khatal !'); //write a response to the client
//     response.end(); //end the response
//   }).listen(8082); //the server object listens on port 8080

var http = require('http');
 http.createServer(function(request,response){
  response.write("hello world");
  response.end("");
 }).listen(8084);