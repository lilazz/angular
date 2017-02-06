	
	app.controller('mainBarController', function ($scope, $rootScope) {
		$scope.classes = {
			name: "glyphicon glyphicon-triangle-bottom",
			superPower: "glyphicon glyphicon-triangle-bottom",
			rich: "glyphicon glyphicon-triangle-bottom",
			genious: "glyphicon glyphicon-triangle-bottom"
		}
		$scope.reverse = true;
		$scope.persons = [];
		$scope.person = {};
		$scope.show = [];
		$scope.pressed=[];
		
		let person = {};
		let totalPersons = {};
		$scope.del = false;
		
		$scope.addPerson = (evt) => {
			
			$scope.byfield={};
			$scope.isPerson = true;

			
			$scope.persons.push($scope.person);
			var index = $scope.persons.length-1;
			$scope.show[index] = true;
			
			changePerson();
			$rootScope.$broadcast("infoSend", totalPersons);
			$scope.person = {};
		};

		$scope.deleteConfirm = (index) => {
			$scope.show[index] = false;
			
		};

		$scope.deleteCanceled = (index) => {
			$scope.show[index] = true;
			
		};

		$scope.deletePerson = (index) => {
			$scope.persons.splice(index-1,1);
			
			changePerson();
			$scope.show[index] = true;
			$rootScope.$broadcast("infoSend", totalPersons);

		};

		$scope.checkboxWatcher = (index) => {
			
			changePerson();
			$rootScope.$broadcast("infoSend", totalPersons);
		};

		$scope.sortBy = (propName) => {
					
			let down = "glyphicon glyphicon-triangle-bottom";
			let top = "glyphicon glyphicon-triangle-top";
			
			if ($scope.classes[propName] === top) {
				$scope.classes[propName] = down;
			} else {
				$scope.classes[propName] = top;
			}

			$scope.reverse = ($scope.propertyName === propName) ? !$scope.reverse : false;
    		$scope.propertyName = propName;

		}
		
		$scope.showChoosed = (propName) => {
			$scope.byfield={};
			$scope.pressed[propName] = true;

			$scope.isPerson = true;
			$scope.person[propName] = true;
			$scope.byfield[propName] = true;
						
		}	
		
		function deleteOne (index) {
			$scope.persons.splice(index,1);
			
			changePerson();
			
			$rootScope.$broadcast("infoSend", totalPersons);
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
	