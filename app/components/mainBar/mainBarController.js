	
	app.controller('mainBarController', function ($scope) {
		$scope.persons = [];
		$scope.person = {};

		$scope.addPerson = () => {
			$scope.persons.push($scope.person);
			$scope.person = {};

		};
		$scope.deletePerson = (index) => {
			$scope.persons.splice(index,1);
		}
	})