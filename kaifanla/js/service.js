app.service("dishes", function($http, $q) {
    var deferred = $q.defer();
    var promise = deferred.promise;
    console.log(promise);
    $http({
        method: "GET",
        url: "data/dish.json"
    }).then(function(res) {
        deferred.resolve({
            data: res.data
        });
    }, function(error) {
        deferred.reject(error);
    });
    return promise;
});