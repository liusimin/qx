angular.module('xiangmuApp').controller("a",["$scope","$http","$state","$rootScope",function ($scope,$http,$state,$rootScope) {
	$scope.add=function(){
		$scope.time=new Date();
        $scope.year=$scope.time.getFullYear();   //获取年
        $scope.month=$scope.time.getMonth()+1;    //获取月
        $scope.data2=$scope.time.getDate();       //获取日
        $scope.hour=$scope.time.getHours();       //获取时
        $scope.minutes=$scope.time.getMinutes();  //获取分
$scope.order_time=$scope.year+'-'+$scope.month+'-'+$scope.data2+' '+''+$scope.hour+'时'+$scope.minutes+'分';
$scope.date=$scope.order_time
		$http({
			url:"http://www.bugcenter.com.cn:1511/item",
			method:"POST",
      data:{classify:$scope.classify,frequency:$scope.frequency,importance:$scope.importance,status:'0',date:$scope.order_time,summary:$scope.summary,from:'csd',description:$scope.description,to:$scope.to
      }
    }).success(function(e){
      $state.go("daohang")
      //$scope.data.push($scope.updata2)
		})
	}
  var index=0;
  var ctt=document.getElementById('classif');
  var lac=ctt.getElementsByTagName('label');
  var tc=too.getElementsByTagName('div');
  for(var i=0;i<lac.length;i++){
    lac[i].index=i;
    lac[i].onclick=function(){
      for(var i=0;i<tc.length;i++){
        tc[i].style.display="none"
      }
      too.style.display="block";
      tc[this.index].style.display='block';
      index=this.index;
    }
  }
}]);