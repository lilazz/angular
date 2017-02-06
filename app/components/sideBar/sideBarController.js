app.controller('sideBarController', function ($scope, $rootScope) {
	
	$scope.$on("infoSend", function (evt, totalPersons) {
        $scope.total = totalPersons.total;
        $scope.super = totalPersons.superPower;
        $scope.rich = totalPersons.rich;
        $scope.genious = totalPersons.genious;
    });	
	})