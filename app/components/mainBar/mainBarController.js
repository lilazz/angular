	
	app.controller('mainBarController', function ($scope, $rootScope, $interval) {
		$scope.classes = {
			name: "glyphicon glyphicon-triangle-bottom",
			superPower: "glyphicon glyphicon-triangle-bottom",
			rich: "glyphicon glyphicon-triangle-bottom",
			genious: "glyphicon glyphicon-triangle-bottom"
		}
		//$scope.classes = "glyphicon glyphicon-triangle-bottom";
		$scope.reverse = true;
		$scope.persons = [];
		$scope.person = {};
		let person = {};
		let totalPersons = {};
		$interval (function () {
			console.log ($scope.byfield)
		},500)
		
		$scope.addPerson = (evt) => {
			//console.log($scope.index);
			$scope.persons.push($scope.person);
			changePerson();
			$rootScope.$broadcast("infoSend", totalPersons);
			$scope.person = {};
		};

		$scope.deletePerson = (index) => {
			
			$scope.persons.splice(index,1);
			
			changePerson();
			
			$rootScope.$broadcast("infoSend", totalPersons);

		};

		$scope.checkboxWatcher = (index) => {
			console.log($scope.persons[index]);
			changePerson();
			$rootScope.$broadcast("infoSend", totalPersons);
		};

		$scope.sortBy = (propName) => {
					
			let down = "glyphicon glyphicon-triangle-bottom";
			let top = "glyphicon glyphicon-triangle-top";
			//console.log($scope.person);
			if ($scope.classes[propName] === top) {
				$scope.classes[propName] = down;

				
			} else {
				$scope.classes[propName] = top;
				
			}

			
			$scope.reverse = ($scope.propertyName === propName) ? !$scope.reverse : false;
    		$scope.propertyName = propName;

		}
		$scope.showChoosed = (propName) => {
			$scope.byfield = {};
			console.log ('clear')
			$scope.person[propName]=true;
			$scope.byfield[propName] = true;	
			console.log ($scope.byfield) 

		}	

		function changePerson ()  {
			totalPersons = {
			superPower:0,
			rich:0,
			genious:0
			};
			totalPersons.total = $scope.persons.length;
			
			for (let i=0;i<$scope.persons.length;i++){
				for (let key in $scope.persons[i]) {
					totalPersons[key] += Number($scope.persons[i][key]);

				}
			}
			
		};

		})
	