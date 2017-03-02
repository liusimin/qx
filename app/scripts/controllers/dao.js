angular.module('xiangmuApp') .controller("daohang",["$scope","$http","$rootScope","$state",function ($scope,$http,$rootScope,$state){
  $scope.user=$rootScope.user.username
  $http({
    url: "http://www.bugcenter.com.cn:1511/item",
    method:"get",
    params:{to:$scope.user}
  }).success(function(e){
    $scope.data = e
  })
  $scope.editSave=function(){
    $http({
      url:"http://www.bugcenter.com.cn:1511/item/"+$scope.editData.id,
      method:"PUT",
      data:$scope.editData
    }).success(function(){
    })
  }
  $scope.edit=function(e){
    $scope.editData=e
  }

  $scope.w=""
  
  
  
var num=0;
$http({
    url:'http://www.bugcenter.com.cn:1511/item',
    method:"GET",
    params:{"$skip":num,"$limit":6}
}).success(function(e){
    $scope.data=e
   
    
});

$scope.next=function(){
    num+=6;
    $http({
      url:'http://www.bugcenter.com.cn:1511/item',
      method:"GET",
      params:{"$skip":num,"$limit":6}
    }).success(function(e){
      $scope.data=e
     
    
    })
}
$scope.shang=function(){
    num-=6;
    $http({
      url:'http://www.bugcenter.com.cn:1511/item',
      method:"GET",
      params:{"$skip":num,"$limit":6}
    }).success(function(e){
      $scope.data=e
    
    })
}


}])
