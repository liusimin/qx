angular.module('xiangmuApp').controller("PieCtrl",["$scope","$http",function ($scope,$http) {
    $scope.a=[],
    $scope.b=[],
    $scope.c=[]
  $http({
    url: "http://www.bugcenter.com.cn:1511/item",
    method:"get"
  }).success(function(e){
    $scope.data = e
    for(var i=0;i< e.length;i++){
      if(e[i].importance==0){
        $scope.a.push(e[i].importance)
        //alert(e[i])
      }
      if(e[i].importance==1){
        $scope.b.push(e[i].importance)
      }
      if(e[i].importance==2){
        $scope.c.push(e[i].importance)
      }
    }
    $scope.labels = ['重要', '中等', '一般'];
    $scope.data = [$scope.a.length,$scope.b.length,$scope.c.length];
  })
}])
