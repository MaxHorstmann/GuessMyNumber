var guessApp = angular.module('guessApp', []);

guessApp.controller('guessController', ['$scope', function($scope) {
	$scope.newGame = function() {
		$scope.max =  50;
	    $scope.number = Math.floor($scope.max * Math.random());
	    $scope.guessMin = 0;
	    $scope.guessMax = $scope.max;
	    $scope.attempts = 0;
	};
	$scope.newGame();

	$scope.getNumbers = function() {
	    return new Array($scope.max);   
	}

	$scope.check = function(index) {
		if (index < $scope.number) $scope.guessMin = index;
		else $scope.guessMax = index;
		$scope.attempts++;
	};


}]);

