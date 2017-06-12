//script.js

//create the module and name it vivikshaApp
var vivikshaApp = angular.module('vivikshaApp', ['ngRoute']);

vivikshaApp.config(function($routeProvider) {
	$routeProvider

		// route for the home page
		.when('/', {
			templateUrl : 'pages/artdirection.html',
			controller : 'mainController'
		})

		// route for the advertising page
		.when('/artdirection', {
			templateUrl : 'pages/artdirection.html',
			controller : 'advertisingController'
		})

		// route for the wedding party page
		.when('/design', {
			templateUrl : 'pages/design.html',
			controller : 'designController'
		})

		// route for the photos page
		.when('/diaries', {
			templateUrl : 'pages/diaries.html',
			controller : 'diariesController'
		})

		// route for the schedule page
		.when('/about', {
			templateUrl : 'pages/about.html',
			controller : 'aboutController'
		})

		.when('/modal', {
			templateUrl : 'myModalContent.html',
			controller : 'adController'
		})

		.otherwise( {
			redirectTo: '/'
		});
});

// vivikshaApp.factory('instagram', ['$http', function($http){

// 	return {
// 		fetchPopular: function(callback){
            
//             var endPoint = "https://api.instagram.com/v1/media/popular?client_id=df4f5993df224da8941d1294de07e57d&callback=JSON_CALLBACK";
            
//             $http.jsonp(endPoint).success(function(response){
//                 callback(response.data);
//             });
// 		},

// 		recentTagged: function(tag, callback) {
// 			var endPoint = "https://api.instagram.com/v1/tags/"+tag+"/media/recent?access_token=54307989.1fb234f.1393e82b57a1477484835a8c6e98e422&client_id=df4f5993df224da8941d1294de07e57d&callback=JSON_CALLBACK";
		
//             $http.jsonp(endPoint).success(function(response){
//                 callback(response.data);
//             });
// 		},

// 		selfFeed: function(callback) {
// 			var endPoint = "https://api.instagram.com/v1/users/self/feed?client_id=df4f5993df224da8941d1294de07e57d&callback=JSON_CALLBACK";
		
//             $http.jsonp(endPoint).success(function(response){
//                 callback(response.data);
//             });
// 		}
// 	};

// }]);

//create a controller and inject Angular's $scope
// vivikshaApp.controller('mainController', function($scope) {

// 	// //create a message to display in our view
// 	// $scope.message = "MAY 26, 2016";
// 	// $scope.welcomePics = [
// 	// 	{image : 'img/home/31.jpg', description : 'Welcome photo'}
// 	// ];

// 	// var updateClock = function () {
// 	// 	var eventDate = new Date("May 26, 2016 11:00:00");
// 	// 	var currentDate = new Date();
// 	// 	var diff = eventDate - currentDate;
// 	// 	$scope.seconds = diff / 1000;
// 	// 	$scope.timeTillEvent = {
// 	// 		daysLeft: parseInt($scope.seconds / 86400),
// 	// 		hoursLeft: parseInt($scope.seconds % 86400 / 3600),
// 	// 		minutesLeft: parseInt($scope.seconds % 86400 % 3600 / 60),
// 	// 		secondsLeft: parseInt($scope.seconds % 86400 % 3600 % 60)
// 	// 	}
// 	// };

// 	// setInterval(function () {
// 	// 	$scope.$apply(updateClock);
// 	// }, 1000);
// 	// updateClock();


// });

//create a controller and inject Angular's $scope
vivikshaApp.controller('mainController', function($scope) {

});

vivikshaApp.controller('advertisingController', function($scope) {

});

vivikshaApp.controller('designController', function($scope) {

});

vivikshaApp.controller('diariesController', function($scope) {

});

vivikshaApp.controller('aboutController', function($scope) {

});


vivikshaApp.controller('advertisingController123', function($scope) {

	//create a message to display in our view
	$scope.message = "Look! I am our story page!";
	$scope.proposalPics = [
		{image : 'img/story/photo1.jpg', description : 'Photo 1'},
		{image : 'img/story/photo2.jpg', description : 'Photo 2'},
		{image : 'img/story/photo3.jpg', description : 'Photo 3'}
	];

	$scope.jabWeMetPics = [
		{image : 'img/story/35.jpg', description : 'Photo 35'},
		{image : 'img/story/29.jpg', description : 'Photo 29'},
		{image : 'img/story/39.jpg', description : 'Photo 39'}
	];

	$scope.twostatesPics = [
		{image : 'img/story/2statespic1.jpg', description : 'Photo 1'},
		{image : 'img/story/2statespic2.jpg', description : 'Photo 2'},
		{image : 'img/story/2statespic3.jpg', description : 'Photo 3'}
	];

    $scope.img = "";
    $scope.toggleModal = function(img) {
		$scope.img = img;
		$scope.showModal = !$scope.showModal;
    };
});

vivikshaApp.controller('photosController', function($scope) {

	//create a message to display in our view
	$scope.message = "Look! I am photos page!";

	$scope.images = [
		{image : 'img/photos/11.jpg', thumbnail : 'img/photos/thumb_11.jpg', description : 'Photo 11'},
		{image : 'img/photos/12.jpg', thumbnail : 'img/photos/thumb_12.jpg', description : 'Photo 12'},
		{image : 'img/photos/13.jpg', thumbnail : 'img/photos/thumb_13.jpg', description : 'Photo 13'},
		{image : 'img/photos/14.jpg', thumbnail : 'img/photos/thumb_14.jpg', description : 'Photo 14'},
		{image : 'img/photos/15.jpg', thumbnail : 'img/photos/thumb_15.jpg', description : 'Photo 15'},
		{image : 'img/photos/16.jpg', thumbnail : 'img/photos/thumb_16.jpg', description : 'Photo 16'},
		{image : 'img/photos/21.jpg', thumbnail : 'img/photos/thumb_21.jpg', description : 'Photo 21'},
		{image : 'img/photos/22.jpg', thumbnail : 'img/photos/thumb_22.jpg', description : 'Photo 22'},
		{image : 'img/photos/23.jpg', thumbnail : 'img/photos/thumb_23.jpg', description : 'Photo 23'},
		{image : 'img/photos/24.jpg', thumbnail : 'img/photos/thumb_24.jpg', description : 'Photo 24'},
		{image : 'img/photos/25.jpg', thumbnail : 'img/photos/thumb_25.jpg', description : 'Photo 25'},
		{image : 'img/photos/26.jpg', thumbnail : 'img/photos/thumb_26.jpg', description : 'Photo 26'},
		{image : 'img/photos/27.jpg', thumbnail : 'img/photos/thumb_27.jpg', description : 'Photo 27'},
		{image : 'img/photos/31.jpg', thumbnail : 'img/photos/thumb_31.jpg', description : 'Photo 31'},
		{image : 'img/photos/32.jpg', thumbnail : 'img/photos/thumb_32.jpg', description : 'Photo 32'},
		{image : 'img/photos/33.jpg', thumbnail : 'img/photos/thumb_33.jpg', description : 'Photo 33'},
		{image : 'img/photos/34.jpg', thumbnail : 'img/photos/thumb_34.jpg', description : 'Photo 34'},
		{image : 'img/photos/35.jpg', thumbnail : 'img/photos/thumb_35.jpg', description : 'Photo 35'},
		{image : 'img/photos/36.jpg', thumbnail : 'img/photos/thumb_36.jpg', description : 'Photo 36'},
		{image : 'img/photos/37.jpg', thumbnail : 'img/photos/thumb_37.jpg', description : 'Photo 37'},

	];

	$scope.index = 0;
	$scope.playSlideshow = true;

	$scope.isActive = function(index) {
		return $scope.index === index;
	};

	$scope.showPrevious = function() {
		$scope.index = ($scope.index > 0) ? --$scope.index : $scope.images.length - 1;
	};

	$scope.showNext = function() {
		$scope.index = ($scope.index < $scope.images.length - 1) ? ++$scope.index : 0;
	};

	$scope.showImage = function(index) {
		$scope.index = index;
	};

	$scope.playShow = function(playFlag) {
		$scope.playSlideshow = playFlag;

		if(playFlag === true) {
			$scope.autoplay = setInterval(function () {
							$scope.$apply($scope.showNext());
						}, 5000);
		}

		if(playFlag === false) {
			clearInterval($scope.autoplay);
		}
	};

	$scope.playShow(true);
});

// vivikshaApp.directive('modal', function () {
//     return {        
//       template: '<div class="modal fade">' + 
// 		          '<div class="modal-dialog">' + 
// 		            '<div class="modal-content">' + 
// 		              '<div ng-transclude></div>' + 
// 		            '</div>' + 
// 		          '</div>' + 
// 		        '</div>',

//       restrict: 'E',
//       transclude: true,
//       replace:true,
//       scope:true,
//       link: function postLink(scope, element, attrs) {
//         scope.title = attrs.title;

//         scope.$watch(attrs.visible, function(value){
//           if(value == true)
//             $(element).modal('show');
//           else
//             $(element).modal('hide');
//         });

//         $(element).on('shown.bs.modal', function(){
//           scope.$apply(function(){
//             scope.$parent[attrs.visible] = true;
//           });
//         });

//         $(element).on('hidden.bs.modal', function(){
//           scope.$apply(function(){
//             scope.$parent[attrs.visible] = false;
//           });
//         });
//       }
//     };
//   });

// vivikshaApp.directive('backImg', function(){
//     return function(scope, element, attrs){
//         var url = attrs.backImg;
//         element.css({
//             'background-image': 'url(' + url +')',
//             //'background-size' : 'cover',
// 			'background-repeat' : 'repeat',
// 			'background-position' : 'top left'
//         });
//     };
// });

// vivikshaApp.directive('backImgCover', function(){
// 	return function(scope, element, attrs){
// 		var url = attrs.backImgCover;
// 		element.css({
// 			'background-image': 'url(' + url +')',
// 			'background-size' : 'cover',
// 			'background-repeat' : 'no-repeat',
// 			'background-position' : 'center center',
// 			'background-attachment' : 'fixed'

// 		});
// 	};
// });