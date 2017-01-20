	
	app.controller('mainBarController', function ($scope, $rootScope) {
		$scope.persons = [];
		$scope.person = {};
		person = {};
		totalPersons = {};
		
	

		$scope.addPerson = (evt) => {
			//console.log($scope.index);
			$scope.persons.push($scope.person);
			changePerson($scope.person);
			$rootScope.$broadcast("infoSend", totalPersons);
			$scope.person = {};
		};

		$scope.deletePerson = (index) => {
			
			$scope.persons.splice(index,1);
			
			changePerson($scope.persons[index]);
			
			$rootScope.$broadcast("infoSend", totalPersons);

		};

		$scope.checkboxWatcher = (index) => {
			console.log($scope.persons[index]);
			changePerson($scope.persons[index]);
			$rootScope.$broadcast("infoSend", totalPersons);
		};

		function changePerson (person)  {
			totalPersons = {
			superPower:0,
			rich:0,
			genious:0
			};
			totalPersons.total = $scope.persons.length;
			
			console.log(person);

			for (let key in person) {
				totalPersons[key] += Number(person[key]);

			}
			console.log(totalPersons);
			//return totalPersons;
			
		};

		})
	/*	$scope.checkboxWatcher = (index) => {
			console.log($scope.persons[index]);
			if ($scope.persons[index].superPower) {totalPersons.superPower++};
			if ($scope.persons[index].rich) {totalPersons.rich++};
			if ($scope.persons[index].genious) {totalPersons.genious++};
			console.log(totalPersons);
			$rootScope.$broadcast("infoSend", totalPersons);

		}
		
		$scope.addPerson = (evt) => {
			
			for (key in $scope.person){
				clonePerson[key] = $scope.person[key]
			}
			$scope.persons.push(clonePerson);
			totalPersons.total = $scope.persons.length;
			console.log(totalPersons.total);
			//for (key in totalPersons){
			if (clonePerson.superPower) {totalPersons.superPower++};
			if (clonePerson.rich) {totalPersons.rich++};
			if (clonePerson.genious) {totalPersons.genious++};
		//}
			
			$rootScope.$broadcast("infoSend", totalPersons);
console.log($scope.person);
			$scope.person = {};
			clonePerson = {};
		};



		$scope.deletePerson = (index) => {

			$scope.persons.splice(index,1);
			totalPersons.total = $scope.persons.length;
			console.log(totalPersons.total);

			if (!$scope.persons[index]) {
				totalPersons = {
			total:0,
			superPower:0,
			rich:0,
			genious:0
		};
			} else {
			if ($scope.persons[index].superPower) {
					if (totalPersons.superPower>1) {
						totalPersons.superPower--;
					} else {
						totalPersons.superPower=0;}
					};
			if ($scope.persons[index].rich) {
				if (totalPersons.rich>1) {
					totalPersons.rich--;
				} else {
					totalPersons.rich=0;}
				};
			if ($scope.persons[index].genious) {
				if (totalPersons.genious>1) {
					totalPersons.genious--;
				} else {
					totalPersons.genious=0;}
				};

			};
			$rootScope.$broadcast("infoSend", totalPersons);
		};

*/
	