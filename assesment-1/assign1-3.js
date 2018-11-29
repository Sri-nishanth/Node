var fs = require('fs');
var http = require('http');

console.log("Server has Started !!");

http.createServer(function(req, res){
	fs.readFile("winter.html", function(err, data){
		if(err){
			res.write("Error");
			res.end();
		}
		res.writeHead(200, {'Content-Type':'text/html'});
		res.write(data);
		res.end();
	});


}).listen(8080);