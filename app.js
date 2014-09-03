var express = require('express');
var http = require('http');
var fs = require('fs');
var cors = require('cors');


var app = express();
app.use(cors());
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
			res.write(contents);
			res.end();
		}
	});
});

app.get('/catalogData', function(req, res)
{
	fs.readFile('data.json', function(error, contents)
	{
		if(error) console.log(error);
		else
		{
			res.write(contents);
			res.end();
		}
	});
});

app.get('/static/home.html', function(req, res)
{
	console.log('login got called');
	res.write('Home');
	res.end();
});
