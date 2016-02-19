// Requires \\
var express = require('express');
// var bodyParser = require('body-parser');
var fs = require('fs')
var logger = require('morgan');
// Create Express App Object \\
var app = express ()

var fileContents = fs.readFileSync('data.txt');


// Application Configuration \\
app.use(logger('dev'));


app.get('/', function (req, res) {
	res.header('Content-Type', 'text/html'); 
	res.send(fileContents)
})




// Creating Server and Listening for Connections \\
var port = 3000
app.listen(port, function(){
  console.log('Server running on port ' + port);

})


