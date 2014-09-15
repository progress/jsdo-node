### Project Description
This project centers around a node server that takes data stored in a MongoDB and exposes it under the jsdo protocol. The serviceURI is http://nodejsdo-21944.onmodulus.net and the catalogURI is http://nodejsdo-21944.onmodulus.net/catalogURI. Each database requires a catalog that describes the properties of each data point and the functions available for manipulating the data. This project also contains a node file that tests the server to make sure it works properly. This can be viewed at http://angulardemo-21580.onmodulus.net/test. This data is also table-formatted using angular.js at http://statictest-21670.onmodulus.net (code not on GitHub).

### Running the app

1. (Optional) Make a MongoDB database on [Modulus](http://modulus.io) and fill in config.json. You can skip steps 1 & 2 if you already have your own database<br/>
2. (Optional) Run fillDB.js to fill your MongoDB with test data<br/>
3. Run npm install <br/>
4. Run the application by invoking node app.js <br/>
*To test the app*
5. Fill in your service and catalog uri's in jsdoTester/app.js
6. Run npm install in jsdoTester/ <br/>
7. Run jsdoTester/app.js using node <br />
8. Navigate to localhost:3000/test to see if your app is working. <br />

### Directory Descriptions

    app.js                  --> main app for Service URI
    config.json             --> configuration details for MongoDB server
    data.json               --> test data used by the app
    fillDB.js               --> code for filling in the database with the data in data.json
    LICENSE.txt             --> MIT License
    package.json            --> for npm
    README.md               --> this file
    Catalog/                --> contains the data catalog for the sample data used
      catalog.json          --> data catalog for the sample data used in the project
    jsdoTester/             --> for testing the functionality of the jsdo server
      app.js                --> route for serving JSON. This is simulating Corticon.
      package.json          --> for npm
      progress.js           --> Progress code for working with JSDO
      progress.session.js   --> Progress code for working with JSDO
      XMLHttpRequest.js     --> Wrapper for js to emulate the browser XMLHttpRequest object

### Relevant Blog Posts
[Displaying OpenEdge Data in an AngularJS Web App](http://dcinglis.wordpress.com/2014/08/19/display-openedge-data-in-an-angularjs-web-app/)	

### License
MIT
