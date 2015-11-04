angular.module("sportsStore").constant("dataUrl", "http://localhost:50220/home/Products").controller("sportsStoreCtrl", function ($scope,$http,dataUrl) {

	
	$scope.data = {
		products: []
	}
	
	$http.get(dataUrl).success(function (data) {

			
			$scope.data.products = data;
			
	}).error(function (error) {
		$scope.data.error = error;
	});

	
});



