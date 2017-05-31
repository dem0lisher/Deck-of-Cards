(function(){
	var app=angular.module('game', []);

	app.controller('CardController', ['$scope', function($scope){
		$scope.types = [
		{
			name: 'Hearts'
		},
		{
			name: 'Diamonds'
		},
		{
			name: 'Spades'
		},
		{
			name: 'Clubs'
		}
		];
	}]);

	app.directive('card', function(){
		return{
			restrict: 'E',
			scope: {
				info:'='
			},
			templateUrl:'../card.html'
		};
	});
})();