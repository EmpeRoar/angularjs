var jediApp = angular.module("JediApp", []);

jediApp.controller("JediCtrl", function ($scope) {
	$scope.jediList = model;
});

var model = [{ Name: "Julius Bacosa" },
			 { Name: "Anakin Skywalker" },
			 { Name: "Obiwan Kinobi" },
			 { Name: "Padme Amedala" }];
