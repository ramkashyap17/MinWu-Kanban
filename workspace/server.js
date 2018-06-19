var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
	res.header('Access-Control-Allow-Headers', 'Content-Type');
	next();
});

app.use('/', require('./app/dispatcher'));

app.set("view options", {layout: false});
app.set('view engine', 'html');
app.engine('html', require('ejs').renderFile);

app.use(express.static(path.join(__dirname, 'public')));

mongoose.connection
	.on('error', function(err) {console.log(err.message)})
	.on('disconnected', function() {
		console.log('Mongoose connnection to DB has been disconnected');
	})
	.on('connected', function() {
		console.log('Connected to mongo')
		app.listen(4000, process.env.IP);
	});

var closeDBConnection = function() {
	mongoose.connection.close(function() { process.exit(0); });
};

process.on('SIGINT', closeDBConnection).on('SIGTERM', closeDBConnection);

mongoose.connect(require('./config/db').connectString);