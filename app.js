//  Copyright 2014 © Progress Software
//  Contributor: David Inglis
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

var companyModel = mongoose.model('company', {
    CustNum: String,
    Name: String,
    Address: String,
    City: String,
    State: String,
    PostalCode: String,
    Country: String,
    Phone: String,
    TextRowID: String
});


var server = http.createServer(app);
app.set('port', process.env.PORT || 3000);

server.listen(app.get('port'), function() {
    console.log('express server initialized on port ' + app.get('port'));
});

// When url is accessed responds with 'REST Adapter'
app.get('/', function(req, res) {
    res.write('REST Adapter');
    res.end();
});

// exposes the catalog for the sample data
app.get('/catalogURI', function(req, res) {
    fs.readFile('Catalog/catalog.json', function(error, contents) {
        if (error) console.log(error);
        else {
            res.type('application/json');
            res.write(contents);
            res.end();
        }
    });
});

// exposes the sample data in jsdo form
app.get('/catalogData/dscustomer', function(req, res) {
    companyModel.find(function(error, companies) {
        var output = {
            "dsCustomer": {
                "eCustomer": []
            }
        };
        for (var i = 0; i < companies.length; i++) {
            output.dsCustomer.eCustomer.push(companies[i]);
        }
        res.write(JSON.stringify(output));
        res.end();
    });
});

app.get('/static/home.html', function(req, res) {
    console.log('login got called');
    res.write('Home');
    res.end();
});