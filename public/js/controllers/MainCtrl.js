
angular.module('MainCtrl', []).controller('MainController', function($scope, $rootScope, $http, $window) {

    console.log('hello');
    $rootScope.checkLoggedIn = true;


    $rootScope.users = [{
    username: "sakshi@abc.com",
    password: "sakshi123",
    booking: {
        hotel_visited: {
            check: true,
            name: 'Ibis Hotel'
        },
        booking_viewed: {
            check: false,
            name: ''
        },
        booking_done: {
            check: false,
            name: ''    
        }
    }
    
}, {
    username: "rohan@abc.com",
    password: "sakshi123",
    booking: {
        hotel_visited: {
            check: false,
            name: ''
        },
        booking_viewed: {
            check: true,
            name: 'Ibis Hotel'
        },
        booking_done: {
            check: false,
            name: '' 
        }   
    }
}, {
    username: "tanvi@abc.com",
    password: "tanvi123",
    booking: {
        hotel_visited: {
            check: false,
            hotel_name: ''
        },
        booking_viewed: {
            check: false,
            hotel_name: ''
        },
        booking_done: {
            check: true,
            hotel_name: 'Ibis Hotel'    
        }
    }
}];

    $scope.user = {};
    $scope.login =  function(user){
        console.log('entered login----',$scope.user);

        angular.forEach($rootScope.users, function(value){
            console.log('value,key----------------------',value, value.username.toString(),user.username.toString(),value.username.toString()==user.username.toString());
            if(value.username.toString() == user.username.toString()){
                if(value.password.toString() == user.password.toString()){
                    $rootScope.checkLoggedIn = true;
                    $rootScope.loggedInUser = value;
                    window.location = "/home";
                } else{
                    alert('Wrong Username/Password')
                }
            }
        })

        // $http.post('/checkUser', {
        //         username: $scope.user.username,
        //         password: $scope.user.password
        //     }, {
        //         headers : {
        //             'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        //         }
        //     }).then(function(err, response){
        //         console.log('----------------In checkUser success-----------------');    
        //     })
    
        // window.location = "/home";

    } 

});