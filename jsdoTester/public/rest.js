function App($scope, $http) {
    $http({
        method: 'GET',
        url: '/test'
    }).
    success(function(data) {
        console.log('good');
        $scope.companies = data;
        console.log(data);
    }).
    error(function(data) {
        console.log('bad');
        $scope.companies = 'error';
        console.log(data);
    });
}