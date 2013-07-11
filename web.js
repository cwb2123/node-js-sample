var express = require('express');
var fs = require('fs');
var indexFile = "index.html";

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var buffer;
	fs.readFileSync(indexFile,function (err,data){
	    if(err) throw err;
	    buffer  = new Buffer(data);
	});
	

    response.send(buffer.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
