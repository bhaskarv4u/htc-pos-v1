var ionicApp = angular.module('starter', ['ionic', 'ngCordova']);
//var db = null;

ionicApp.run(function($ionicPlatform, $cordovaSQLite) {
    $ionicPlatform.ready(function() {
		//window.plugins.sqlDB.remove("Mobile_POS.db",0);
        if(window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if(window.StatusBar) {
            StatusBar.styleDefault();
        }
        window.plugins.sqlDB.copy("Mobile_POS.db",0, function() {
           // db = window.sqlitePlugin.openDatabase({name:"Mobile_POS.db"});
        }, function(error) {
           confirm("There was an error copying the database: " +JSON.stringify(error));
           //db = window.sqlitePlugin.openDatabase({name:"Mobile_POS.db"});
        });
    });
});

ionicApp.controller('MainController', ['$scope','$cordovaSQLite', function($scope, $cordovaSQLite) {
 var btnstring="";
 var userid;
 var cmdstring=" USER ID:";
 var mode=0;
 var cntrlstring="text";
 $scope.btnpress= function(btnid) 
    {	
		btnstring=$scope.btnstring;//Required if mixing both type of inputs at same time in same box
		btnstring+=btnid
	   	$scope.btnstring=btnstring;
    }
 $scope.cncpress= function() 
    {
		btnstring=btnstring.substring(0,btnstring.length-1);
		$scope.btnstring=btnstring;
    }
 $scope.cancelpress= function() 
    {
		btnstring="";
		$scope.btnstring=btnstring;
    }
 $scope.okpress= function() 
    {
		if($scope.btnstring==="")
		{
		alert("Blank Fields Not Allowed");
		$scope.cancelpress();
		return;
		}
		// If planning to use input box type as text
		if(/^[a-zA-Z]+$/.test($scope.btnstring))
		{
			alert("Alphabets not allowed. Only Numbers");
			$scope.cancelpress();
		
		}
		if(mode==0)
		{
			userid=$scope.btnstring;
			btnstring="";
			cmdstring="PASSWORD:";
			cntrlstring="password";
			mode=1;
			$scope.btnstring=btnstring;
			$scope.cmdstring=cmdstring;
			$scope.cntrlstring=cntrlstring;
		}
		else if(mode==1)
		{
			btnstring+=$scope.btnstring;
			var pflag=0;
			
			var paswd=$scope.btnstring;
			/*
			var query = "SELECT UserID, Password FROM User";
            $cordovaSQLite.execute(db, query, []).then(function(res) {
            if(res.rows.length > 0) {
                for(var i = 0; i < res.rows.length; i++) {
                    if((res.rows.item(i).UserID==userid)&& (res.rows.item(i).Password==paswd))
					{
						window.location="1.html";
						pflag=1;
						break;
					}
                }
            }
			if(pflag==0)
			{ 
				alert("UserID or Password is wrong");
			}
        }, function (err) {
            confirm(err);
        });
		*/
			if(userid==paswd)
					{
						window.location="index_rise.html";
						pflag=1;
						break;
					}
			mode=0;
			cmdstring="USER ID";
			$scope.cmdstring=cmdstring;
			btnstring="";
			$scope.btnstring=btnstring;
			cntrlstring="text";
			$scope.cntrlstring=cntrlstring;
		}
	}
 $scope.btnstring=btnstring;
 $scope.cmdstring=cmdstring;
}]);