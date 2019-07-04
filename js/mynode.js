var http = require('http');
var date = require('./imports');
var url = require('url');
var os = require("os");
//create a server object:
// req is a request from the client as an object
http.createServer(function (request, response) {
  response.writeHead(200, { 'Content-Type': 'text/html' });  // 200 its a OK code
  response.write('Date: ' + date.dateTime() + os.EOL + 'New line');  //write a response to the client
  response.write(request.url);
  var urlParts = url.parse(request.url, true);
  var query = urlParts.query; //split the query string into readable parts
  var txt = query.year + "\t" + query.month + "\t" + query.day;
  response.end(txt);  //end the response
}).listen(8080);  //the server object listens on port 8080

