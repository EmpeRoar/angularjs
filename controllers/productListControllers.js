angular.module("sportsStore").controller("productListCtrl", function ($scope, $filter) {
	
	var selectedCategory = null;
	
	$scope.selectCategory = function (newCategory) {
		//console.log(newCategory);
		selectedCategory = newCategory;
	}

	$scope.categoryFilterFn = function (product) {
		return selectedCategory == null || product.category == selectedCategory;
	}

});