var todoApp = angular.module("todoApp", []);

todoApp.controller("ToDoCtrl", function ($scope) {
	$scope.todo = model;

	$scope.incompleteCount = function () {
		var count = 0;
		angular.forEach($scope.todo.items, function (item) {
			if (!item.done) { count++ }
		});
		return count;
	}

	$scope.warningLevel = function () {
		return $scope.incompleteCount() < 3 ? "label-success" : "label-warning";
	}

	$scope.addNewItem = function (actionText) {
		$scope.todo.items.push({ action: actionText, done: false });
	}

});

todoApp.run(function ($http) {
	//$http.get("http://localhost:50220/home/todo").success(function (data) {				
	$http.get("/Scripts/todo.json").success(function (data) {					
		//model.items = angular.toJson(data);
	});
});

todoApp.filter("checkedItems", function () {
	return function (items, showComplete) {
		var resultArr = [];
		angular.forEach(items, function (item) {
			if (item.done == false || showComplete == true) {
				resultArr.push(item);
			}
		});
		return resultArr;
	}
});


var model = {
	user: "Adam",
	items: [{ action: "Buy Flowers", done: false },
			{ action: "Get Shoes", done: false },
			{ action: "Collect Tickets", done: true },
			{ action: "Call Joe", done: false }]
};
