(function() {
	// /'use strict';

	angular.module('app.demoComponents', [])
	.directive('demoComponents', demoComponentsFn);

	function demoComponentsFn() {
		return {
			restrict: 'EA',
			templateUrl: 'components/demoComponents/demo.html'
		};
	}
})();