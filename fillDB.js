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
var companyModel = mongoose.model('company', {CustNum: String, Name: String, Address: String, City: String,
											  State: String, PostalCode: String, Country: String, Phone: String,
											  TextRowID: String});	
console.log(data.dsCustomer.eCustomer[0].Name);

// fills the db from the data in the data.json fill
/*
for(var ii = 0; ii < data.dsCustomer.eCustomer.length; ii++)
{
	console.log('2');
	var temp = new companyModel({CustNum: data.dsCustomer.eCustomer[ii].CustNum,
								Name: data.dsCustomer.eCustomer[ii].Name,
								Address: data.dsCustomer.eCustomer[ii].Address,
								City: data.dsCustomer.eCustomer[ii].City,
								State: data.dsCustomer.eCustomer[ii].State,
								PostalCode: data.dsCustomer.eCustomer[ii].PostalCode,
								Country: data.dsCustomer.eCustomer[ii].Country,
								Phone: data.dsCustomer.eCustomer[ii].Phone,
								TextRowID: data.dsCustomer.eCustomer[ii].TextRowID
	});

	temp.save(function(error, success)
	{
		if(error) console.log(error);
		console.log('success');
	});
}
*/

// checks to make sure the DB was filled properly
companyModel.find(function(err, companies)
{
	if(err) console.log(err);
	for(var ii = 0; ii < companies.length; ii++)
	{
		var temp = companies[ii];
		console.log(temp);
	}
});

