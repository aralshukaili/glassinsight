gi_app.directive('angularTest', [function(){
  return {
    restrict: 'E',
    link: function($scope, $element, $attrs){
      $element.append("<h1>angular-test</h1>");
    }
  }
}]);