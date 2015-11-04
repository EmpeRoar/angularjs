describe('CustomerListController', function(){

  beforeEach(module('phonecatApp'));

  it('should create "customers" model with 4 customer', inject(function($controller) {
    var scope = {},
        ctrl = $controller('CustomerListController', {$scope:scope});

    expect(scope.phones.length).toBe(4);
  }));

});