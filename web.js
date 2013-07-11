var express = require('express');
var fs = require('fs');
var indexFile = "index.html";

var app = express.createServer(express.logger());
var buffer = new Buffer(256);
 
app.get('/', function(request, response) {

    fs.readFile(indexFile,function(err, data){
	if(err) throw err;
	console.log(data);
	buffer.write(data);
    });

    response.send("YO'");


});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
