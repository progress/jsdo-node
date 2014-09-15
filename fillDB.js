//  Copyright 2014 © Progress Software
//  Contributor: David Inglis
// Fills a MongoDB with data from a json file
// Then checks to make sure the db was filled properly
var mongoose = require('mongoose');
var data = require('./data.json');
var config = require('./config.json');

var constring = 'mongodb://' + config.username + ':' + config.password + config.dbURL;
mongoose.connect(constring);
var db = mongoose.connection;
console.log('1');
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
console.log(data.dsCustomer.eCustomer[0].Name);

for(var i = 0; i < data.dsCustomer.eCustomer.length; i++)
{
	console.log('2');
	var temp = new companyModel({CustNum: data.dsCustomer.eCustomer[i].CustNum,
								Name: data.dsCustomer.eCustomer[i].Name,
								Address: data.dsCustomer.eCustomer[i].Address,
								City: data.dsCustomer.eCustomer[i].City,
								State: data.dsCustomer.eCustomer[i].State,
								PostalCode: data.dsCustomer.eCustomer[i].PostalCode,
								Country: data.dsCustomer.eCustomer[i].Country,
								Phone: data.dsCustomer.eCustomer[i].Phone,
								TextRowID: data.dsCustomer.eCustomer[i].TextRowID
	});

	temp.save(function(error, success)
	{
		if(error) console.log(error);
		console.log('success');
	});
}

// checks to make sure the DB was filled properly
companyModel.find(function(err, companies) {
    if (err) console.log(err);
    for (var i = 0; i < companies.length; i++) {
        var temp = companies[i];
        console.log(temp);
    }
});