'use strict';
/**
 * @ngdoc overview
 * @name xiangmuApp
 * @description
 * # xiangmuApp
 *
 * Main module of the application.
 */
angular
  .module('xiangmuApp', ["ui.router","ngCookies","chart.js","ngSanitize","summernote"]).config(["$stateProvider","$urlRouterProvider",function ($stateProvider,$urlRouterProvider){
    $stateProvider.state("daohang",{
      url:"/daohang",
      templateUrl: "views/daohang.html",
      controller: "daohang"
    }).state("dengl",{
      url:"/dengl",
      templateUrl: "views/dengl.html",
      controller: "dengl"
    }).state("a",{
      url:"/a",
      templateUrl: "views/a.html",
      controller: "a"
    }).state("b",{
      url:"/b",
      templateUrl: "views/b.html",
      controller: "b"
    }).state("c",{
      url:"/c",
      templateUrl: "views/c.html",
      controller: "PieCtrl"
    }).state("tubiao",{
      url:"/tubiao",
      templateUrl: "views/tubiao.html",
      controller: "RadarCtrl"
    })

    $urlRouterProvider.when('','/dengl')
  }]).filter("imp",function(){
  	return function(e){
  		if(e==0){
  			return "重要"
  		}else if(e==1){
  			return "中等"
  		}else if(e==2){
  			return "一般"
  		}
  	}
  }).filter("imp1",function(){
  	return function(e){
  		if(e==0){
  			return "偶尔"
  		}else if(e==1){
  			return "经常"
  		}
  	}
  });
