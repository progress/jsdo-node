// David Inglis
// Progress Software
// August 2014
// app.js


var express = require('express');
var http = require('http');
var cors = require('cors');

var app = express();
app.use(cors());
app.set('port', process.env.PORT || 3000);

XMLHttpRequest = require("./XMLHttpRequest.js").XMLHttpRequest;
require("./progress.js");
require("./progress.session.js");
var serviceURI = "nodejsdo-21944.onmodulus.net";
var catalogURI = "nodejsdo-21944.onmodulus.net/catalogURI";

// serviceURI = 'http://oemobiledemo.progress.com/MobilityDemoService';
// catalogURI = 'http://oemobiledemo.progress.com/MobilityDemoService/static/mobile/MobilityDemoService.json';

var server = http.createServer(app);

server.listen(app.get('port'), function()
{
	console.log('express server listening on port ' + app.get('port'));
});

/*
app.get('/test', function(req, res)
{
*/
	console.log('1');
	session = new progress.data.Session();
	console.log('1.1');
	session.login(serviceURI, "", "");
	console.log('1.2');
	session.addCatalog(catalogURI);
	console.log('2');
	jsdo = new progress.data.JSDO({ name: 'dsCustomer' });
	jsdo.subscribe('AfterFill', onAfterFillCustomers, this);
	jsdo.fill(); // fills the locally initialized jsdo from the catalog
	var arr = [];
	console.log('3');
	function onAfterFillCustomers(jsdo, success, request)
	{
		console.log('4');
		jsdo.eCustomer.foreach(function(customer)
		{
			arr.push({name: jsdo.eCustomer.Name, address: jsdo.eCustomer.Address,
						city: jsdo.eCustomer.City, state: jsdo.eCustomer.State});
		});
		console.log(arr);
		// res.write(JSON.stringify(arr));
		console.log('5');
	}
	// res.write('end');
	// res.end();
// });

