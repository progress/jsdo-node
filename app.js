// David Inglis
// Progress Software
// August 2014
// A node server that exposes data in jsdo protocol form


var express = require('express');
var http = require('http');
var fs = require('fs');
var cors = require('cors');
var config = require('./config.json');


var app = express();
app.use(cors());
var mongoose = require('mongoose');
var constring = 'mongodb://' + config.username + ':' + config.password + config.dbURL;
console.log(constring);
mongoose.connect(constring);
var db = mongoose.connection;

var companyModel = mongoose.model('company', {CustNum: String, Name: String, Address: String, City: String,
											  State: String, PostalCode: String, Country: String, Phone: String,
											  TextRowID: String});	


var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function()
{
	console.log('express server initialized on port ' + app.get('port'));
});

app.get('/', function(req, res)
{
	res.write('REST Adapter');
	res.end();
});

app.get('/catalogURI', function(req, res)
{
	fs.readFile('Catalog/catalog.json', function(error, contents)
	{
		if(error) console.log(error);
		else
		{
			res.type('application/json');
			res.write(contents);
			res.end();
		}
	});
});

app.get('/catalogData/dscustomer', function(req, res)
{
	companyModel.find(function(error, companies)
	{
		var output = {"dsCustomer": {"eCustomer": []}};
		for(var ii = 0; ii < companies.length; ii++)
		{
			output.dsCustomer.eCustomer.push(companies[ii]);
		}
		res.write(JSON.stringify(output));
		res.end();
	});
	/*
	fs.readFile('data.json', function(error, contents)
	{
		if(error) console.log(error);
		else
		{
			res.write(contents);
			res.end();
		}
	});
	*/
});

app.get('/static/home.html', function(req, res)
{
	console.log('login got called');
	res.write('Home');
	res.end();
});
