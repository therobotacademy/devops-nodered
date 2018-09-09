var http = require('http'); // required for all steps.
var fs = require('fs'); // we need this module for Step #1.5.

/*
// STEP #1 Basic server:
http.createServer(function(request,response) {
	// response.writeHead(200); // Tell the client if response is good.
  response.writeHead(404); // Tell the client if response is good.
	response.write('My server worked!'); // the response body
	response.end(); // end the connection.
}).listen(3000); // you can change this to another port if you want, but then you would have to visit that port in the browser too.
*/

// STEP #1.5 Basic Server Continued...
var bunnyServer = http.createServer();
bunnyServer.on('request', function(req, res) {
	res.writeHead(200);
	res.end('<html><body><h1>Bunny Server is live!<br /><img src="https://cdn.meme.am/instances/400x/55347780.jpg"></h1></body></html>');
}).listen(3000);
