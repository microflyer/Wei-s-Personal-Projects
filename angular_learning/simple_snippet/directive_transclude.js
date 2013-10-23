
var appModule = angular.module('app', []);

appModule.directive('hello', function() {
	return {
		restrict: 'E',
		template: '<div> Hi You! <span ng-transclude></span></div>',
		transclude: true,
		replace:true
	};
});