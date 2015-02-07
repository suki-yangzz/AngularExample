
var app = angular.module('employeeApp', []);

app.controller('customersController', function($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) 
	{
		$scope.employees = response.employees;
	});
	
	
	$scope.addUser = function()
	{	
		var id;
		if($scope.employees.length == 0)
			id = 1;
		else
			id = $scope.employees[$scope.employees.length - 1].id + 1;
		var newEmp = {
			"name": $scope.newName,
			"class": $scope.newSkill,
			"id": id
		};
	   $scope.employees.push(newEmp);
	}
	
	$scope.editUser = function(id)
	{
		for(i in $scope.employees) {
            if($scope.employees[i].id == id) {
				$scope.newName = $scope.employees[i].name;
				$scope.newSkill = $scope.employees[i].class;
				$scope.temp_id = $scope.employees[i].id;
            }
        }  
	}
	
	$scope.delUser = function(id)
	{
		for(i in $scope.employees) {
			if($scope.employees[i].id == id) {
				$scope.employees.splice(i, 1);
			}
		}
	}
	
	$scope.saveEditChanges = function()
	{
		for(i in $scope.employees) {
            if($scope.employees[i].id == $scope.temp_id) {
				$scope.employees[i].name = $scope.newName;
				$scope.employees[i].class = $scope.newSkill;
            }
        }  		
	}
	
});

sampleApp .config(['$routeProvider',
	function($routeProvider) {
		$routeProvider.
		when('/addOrder', {
			templateUrl: 'templates/add-order.html',
			controller: 'AddOrderController'
		}).
		when('/showOrders', {
			templateUrl: 'templates/show-orders.html',
			controller: 'ShowOrdersController'
		}).
		otherwise({
			redirectTo: '/addOrder'
		});
	}
]);



/*
function customersController($scope,$http) {
    $http.get('dummy_data.json')
    .success(function(response) {$scope.employees = response.employees;});
}
*/
