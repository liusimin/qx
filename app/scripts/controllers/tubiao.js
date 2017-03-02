angular.module('xiangmuApp').controller("RadarCtrl",["$scope","$http",function ($scope,$http) {
    $scope.or=[],
    $scope.jin=[]
  $http({
    url: "http://www.bugcenter.com.cn:1511/item",
    method:"get"
  }).success(function(e){
    $scope.data = e
    for(var i=0;i< e.length;i++){
      if(e[i].frequency==0){
        $scope.or.push(e[i].frequency)
        //alert(e[i])
      }
      if(e[i].frequency==1){
        $scope.jin.push(e[i].frequency)
      }
    }
    $scope.labels = ["经常","偶然"];
    $scope.data = [$scope.or.length,$scope.jin.length];
  })
}])
