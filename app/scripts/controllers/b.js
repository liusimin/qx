angular.module('xiangmuApp').controller("b",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {
	$scope.add=function(){
		$http({
			url:"http://www.bugcenter.com.cn:1511/item",
			method:"POST",
			data:$scope.updata
		}).success(function(e){
      $state.go("daohang")
      $scope.data.push($scope.updata)
		})
	}
}]);