// public/js/appRoutes.js
    angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        .when('/', {
            templateUrl: 'views/login.html',
            controller: 'MainController'
        })
        .when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeController'
        })

        .when('/hotel', {
            templateUrl: 'views/hotelPage.html',
            controller: 'HotelPageController'
        });

    $locationProvider.html5Mode(true);

}]);