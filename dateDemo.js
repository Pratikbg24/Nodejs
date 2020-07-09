var http = require('http');
var date = require('./dateModule');

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write("Current date And time are :" + date.myDateTime());
    res.end();
}).listen(8080, console.log("server 8080 are running"))