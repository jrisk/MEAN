var meetupApp = angular.module('meetupApp', ['ngResource']);

meetupApp.controller('meetupsController', ['$scope', '$resource',
	function ($scope, $resource) {
	var Meetup = $resource('/api/meetups');
	$scope.meetupsCount = 10;
	$scope.meetups = [ 
	{ name: "MEAN SF Developers" },
	{ name: "Some other meetups" }
	];

	$scope.createMeetup = function() {
		var meetup = new Meetup();
		meetup.name = $scope.meetupName;
		meetup.$save();
	}
	}]);