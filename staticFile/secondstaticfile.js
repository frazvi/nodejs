// Requires \\
var express = require('express');
// var bodyParser = require('body-parser');
var fs = require('fs')
var logger = require('morgan');
// Create Express App Object \\
var app = express ()

fs.readFile('data.txt', function (err, data) {
	var fileContents = data
	
	app.get('/', function (req, res) {
	res.header('Content-Type', 'text/html'); 
	res.send(fileContents);
})

})


// Application Configuration \\
app.use(logger('dev'));






// Creating Server and Listening for Connections \\
var port = 4000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})


