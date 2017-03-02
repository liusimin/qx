angular.module('xiangmuApp').controller("dengl",["$scope","$http","$state","$rootScope",function($scope,$http,$state,$rootScope){
    //$scope.isshow=true
    $scope.sub=function(){
            $http({
                url: "http://www.bugcenter.com.cn:1511/users/login",
                method:"POST",
                withCredentials:true,
                data:$scope.updata
            }).success(function(e){
              $scope.uid= e.uid
//            $rootScope.user={}
//            $rootScope.user.username=$scope.updata.username
              //$rootScope.user.uid= e.uid
              $http({
                url: "http://www.bugcenter.com.cn:1511/users/"+$scope.uid,
                method:"get"
              }).success(function(e){
               console.log(e)
              $rootScope.user={}
              $rootScope.user.username=$scope.updata.username
                if(e.charactor==0){//wyc
                  //$scope.isshow=false
                  $state.go("daohang")
                }
                if(e.charactor==1){//lnn
                  //$scope.isshow=false
                  $state.go("daohang")
                }
                if(e.charactor==2){//jgr
                  //$scope.isshow=false
                  $state.go("daohang")
                }
               if(e.charactor==3){//csd
                 //$scope.isshow=false
                 $state.go("daohang")
               }
              })
            })
       }
  /**
   * Credits
   *
   * http://google.com/fonts
   ** Thanks for supplying the beautiful fonts!
   *
   * http://subtlepatterns.com/
   ** Thanks for the texture!
   */
  var ADION = (function( $, exports, window, document, undefined ) {

    exports.InlineValidator = function( selector ) {
      var
        DEFAULT_REGEX = /^\S+$/, // non-whitespace
        selector = selector || '.validate-me',
        $fields = $(selector),
        $form = $($fields[0].form); // !!! assumes all field belong to the same form

      // listen for 'submit' and validate
      $form.on('submit', function( e ) {
        e.preventDefault();

        $fields.each(function() {
          var
            $field = $(this).removeClass('valid invalid validated'),
            $pseudo = $field.next('.pseudo-input'),
            $pseudoContent = $pseudo.find('.pseudo-content'),
            regex = $field.data('pattern') ? new RegExp($field.data('pattern')) : DEFAULT_REGEX,
            validTimeoutId = $field.data('timeoutId');

          // regex matches; mark as valid
          if( regex.test($field.val()) ) {
            $field.addClass('valid');
            $pseudoContent.text('输入正确');

            window.clearTimeout(validTimeoutId);

            // dismiss automatically after X seconds
            $field.data('timeoutId', window.setTimeout(function() {
              $field.removeClass('validated');
            }, 3000));
          }

          // regex doesn't match; mark as invalid
          else {
            $field.addClass('invalid');
            $pseudoContent.text('输入错误');

            // dismiss manually
            $pseudo.one('click', function() {
              $field.removeClass('validated').focus();
            });
          }
          // mark as validated
          $field.addClass('validated');
        });
      });
    };
    // auto-init
    $(function() { new exports.InlineValidator(); });
    return exports;
  }(Zepto, ADION || {}, this, document));
}]);

