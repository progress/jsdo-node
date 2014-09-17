function Hello($scope, $http)
{
	//If hosted, you will need to use the url of the hosted jsdo-tester instance
	$http({method: 'GET', url: 'http://localhost:3000/test'}).
	success(function(data)
	{
		console.log('good');
		$scope.companies = data;
		console.log(data);
	}).
	error(function(data)
	{
		console.log('bad');
		$scope.companies = 'error';
		console.log(data);
	});
}