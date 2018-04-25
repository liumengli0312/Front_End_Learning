app.controller("myCtrl", function($scope, dishes) {
    console.log(dishes[0]);
    // $scope.dish = dishes;
    dishes.then(function(res) {
        $scope.dish = res.data;
    }, function(error) {
        console.log(error);
    });
});