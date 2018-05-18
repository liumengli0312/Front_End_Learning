app.service('mySer',function($http,$q){
	var data;
	var defer = $q.defer();
	$http.get("./data/book.json").then(function(response){
		data = response.data;
		defer.resolve(data)
	})
	return defer.promise;
})