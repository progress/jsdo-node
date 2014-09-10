//  Copyright 2014 © Progress Software
//  Contributor: David Inglis
// An app for testing the functionality of the node-jsdo server

XMLHttpRequest = require("./XMLHttpRequest.js").XMLHttpRequest;
require("./progress.js");
require("./progress.session.js");

var serviceURI = "http://nodejsdo-21944.onmodulus.net";
var catalogURI = "http://nodejsdo-21944.onmodulus.net/catalogURI";

session = new progress.data.Session();
session.login(serviceURI, "", "");
session.addCatalog(catalogURI);
jsdo = new progress.data.JSDO({ name: 'dsCustomer' });
jsdo.subscribe('AfterFill', onAfterFillCustomers, this);
jsdo.fill(); // fills the locally initialized jsdo from the catalog


var arr = [];
function onAfterFillCustomers(jsdo, success, request)
{
	jsdo.dsCustomer.foreach(function(customer)
	{
		arr.push({name: jsdo.dsLocation.id});
	});
	console.log(arr);
}


