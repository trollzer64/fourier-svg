const http = require('http');
var url = require('url');
var os = require("os");

const hostname = '127.0.0.1'
const port = process.env.PORT

// Testing importing
var date = require('./imports');
//create a server object:
// req is a request from the client as an object
const server = http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });  // 200 its a OK code
  response.write('Date: ' + date.dateTime() + '<br/>');  //write a response to the client
  response.write(request.url);
  var urlParts = url.parse(request.url, true);
  var query = urlParts.query; //split the query string into readable parts
  var txt = query.year + "\t" + query.month + "\t" + query.day;
  response.end('<br/>' + txt);  //end the response
}).listen(8080);  //the server object listens on port 8080

