var ionicApp = angular.module("starter",[]);

ionicApp.controller('MainController', ['$scope', function($scope) {
 
 $scope.hideFlagForKeypad=false;
 $scope.allButtonsPressed=function()
 {
	
	 $scope.hideFlagForKeypad=true;
 
 
 
 }
 
 
  $scope.exitFromAllCups=function()
  {
	$scope.hideFlagForKeypad=false;
  
  
  
  }
}]);