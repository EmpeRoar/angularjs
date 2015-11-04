angular.module("sportsStore")
	.constant("dataUrl", "http://localhost:50220/home/Products")
	.constant("orderUrl", "http://localhost:50220/home/PutForm")
	.controller("sportsStoreCtrl", function ($scope,$http,dataUrl,orderUrl, cart) {

	
	$scope.data = {
		products: []
	}
	
	$http.get(dataUrl).success(function (data) {

			
			$scope.data.products = data;
			
	}).error(function (error) {
		$scope.data.error = error;
	});

	
	$scope.sendOrder = function (shippingDetails) {

		console.log(shippingDetails);

		var order = angular.copy(shippingDetails);
		order.products = cart.getProducts();
		$http.post(orderUrl, order).success(function (data) {
			$scope.data.orderId = data.id;
			cart.getProducts().length = 0;
		}).error(function (error) {
			$scope.data.orderError = error;
		}).finally(function () {
			$location.path("/complete");
		});
	}


});



