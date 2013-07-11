var express = require('express');

var indexFile = "index.html";

var app = express.createServer(express.logger());

 
app.get('/', function(request, response) {
    var buffer = new Buffer(256);
    var fs = require('fs');
    response.send(buffer.toString('utc 8',fs.readFileSync(indexFile)))});

});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
