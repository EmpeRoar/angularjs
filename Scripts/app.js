var mainApp = angular.module('MainApp', []);

mainApp.controller('CustomerListController', function ($scope) {
  $scope.customers = [
    {
      'name': 'Julius', 
      'age': '32'},
    {
      'name': 'Anakin', 
      'age': '33'},  
   {
      'name': 'Obewan', 
      'age': '40'},     
  {
      'name': 'Amedala', 
      'age': '25'},         
    
  ];
});