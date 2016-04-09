// load modules
var express = require('express');

// create app with express
var app = express();

// configuration
var hostname = 'localhost';
var port = 3000;

// static files in public
app.use(express.static(__dirname + '/public'));

// always return index.html
app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

app.listen(port, hostname, function() {
	console.log(`Server running at http://${hostname}:${port}`);
});
