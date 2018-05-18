app.controller('MyCtrl',function($scope,mySer){
	mySer.then(function (data) {
		$scope.book = data;

		})
	$scope.show = false;
	$scope.show1 = false;
	$scope.first = true;
	$scope.change = function change($event){
		
		$scope.book.forEach(function (item) {
			if(item.name == $event.currentTarget.children[1].children[0].innerText){
				$scope.threePage = item;
				$scope.first = false;
				$scope.show1 = true;
				$scope.show = false;
			}
			
		})
	}
	$scope.showdiv = function showdiv(){
		 	$scope.first = false;
			$scope.show = true;
			$scope.show1 = false;
		 
		};

	$scope.su = function su($event){
		$event.preventDefault(); 
		console.log(111)
		alert("订阅成功");
	};

	$scope.re = function re($event){
		$event.preventDefault();
		$scope.first = false;
		$scope.show = true;
		$scope.show1 = false;
	};

});




