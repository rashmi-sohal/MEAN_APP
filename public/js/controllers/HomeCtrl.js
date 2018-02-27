angular.module('HomeCtrl', []).controller('HomeController', function($scope, $rootScope, $http) {

    console.log('---------entered home page---------')

    $scope.showHotelList = false;
    $scope.showNoHotelList = false;
  
    $scope.hotels = [{
        "name": "Hotel Leela Palace",
        "location": "Haryana",
        "rating": 5,
        "nightly_price": 10000
    }, {
        "name": "Radisson Blu",
        "location": "Delhi",
        "rating": 5,
        "nightly_price": 8500
    }, {
        "name": "Crowne Plaza",
        "location": "Haryana",
        "rating": 5,
        "nightly_price": 9000
    }, {
        "name": "Country Inn and Suites",
        "location": "Delhi",    
        "rating": 4,
        "nightly_price": 5000
    }, {
        "name": "City Park",
        "location": "Delhi",
        "rating": 4,
        "nightly_price": 4500
    }, {
        "name": "Ibis Hotel",
        "location": "Delhi",
        "rating": 3,
        "nightly_price": 3000
    }, {
        "name": "The Fern",
        "location": "Haryana",
        "rating": 3,
        "nightly_price": 2700
    }];

    console.log('$rootScope.users---------------------------',$rootScope.users);


    $scope.selectHotel = {
        location: "",
        rating: "",
        nod: "",
        nop: "",
        nor: ""
    }
    $scope.checkHotelSearch = false; 
    $scope.searchHotel = function(){
        $scope.displayHotel = [];
        $scope.booking = {};

        if($scope.selectHotel.location == undefined || $scope.selectHotel.location == ""){
            alert('Please choose location!')
        } else if($scope.selectHotel.rating == undefined || $scope.selectHotel.rating == ""){
            alert('Please choose rating!')
        } else if($scope.selectHotel.nod == undefined || $scope.selectHotel.nod == ""){
            alert('Please enter number of days!')
        } else if($scope.selectHotel.nop == undefined || $scope.selectHotel.nop == ""){
            alert('Please enter number of people!')
        } else if($scope.selectHotel.nor == undefined || $scope.selectHotel.nor == ""){
            alert('Please enter number of rooms!')
        } else {
            for(var i=0; i<$scope.hotels.length; i++){
            if((parseInt($scope.hotels[i].rating) == parseInt($scope.selectHotel.rating)) && ($scope.hotels[i].location == $scope.selectHotel.location)){
                
                $scope.displayHotel.push($scope.hotels[i]);
            }
        }

        if($scope.displayHotel.length > 0){
            $scope.showHotelList = true;
        } else {
            $scope.showNoHotelList = true;
        }

        console.log('$scope.displayHotel--------------------------------', $scope.displayHotel);
        }
        
        
        
    	// $http.get('/getHotelList').then(function(err, response){
    	// 	if(err){
    	// 		console.log('err--', err);
    	// 	} else{
    	// 		console.log('----------------In getHotelList success-----------------', response);
    	// 		$scope.getHotelList = response;
    	// 		$scope.showHotelList = true;
    	// 	}
    		
    	// })
    }

    

    $scope.viewHotel = function(index){

        console.log('index, selectHotel, displayHotel------------------------', index, $scope.selectHotel, $scope.displayHotel);
        // var dayDiff = ($scope.selectHotel.checkOut - $scope.selectHotel.checkIn)  / 1000 / 60 / 60 / 24;
        // console.log('dayDiff---------------', dayDiff);
        $scope.booking = {
            hotelName: $scope.displayHotel[index].name,
            nop: $scope.selectHotel.nop,
            nod: $scope.selectHotel.nod,
            nor: $scope.selectHotel.nor,
            // checkIn: $scope.selectHotel.checkIn,
            // checkOut: $scope.selectHotel.checkOut,
            amount: $scope.displayHotel[index].nightly_price * $scope.selectHotel.nod * $scope.selectHotel.nor
        };
        
        console.log('booking------------------------', $scope.booking);
    }

    $scope.guest = {};
    $scope.detailCheck = false;
    
    $('input[name="daterange"]').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true
    });
    $scope.payNow = function(guestDetails){
    	console.log('guestDetails----------------------------------------', guestDetails);
    	if(guestDetails.name == "" || guestDetails.name == undefined){
    		alert('Please enter guest name!');
    		$scope.detailCheck = false;
    	}
    	else if(guestDetails.email == "" || guestDetails.email == undefined){
    		alert('Please enter valid email!');
    		$scope.detailCheck = false;
    	}
    	else if(guestDetails.mobile == "" || guestDetails.mobile == undefined){
    		alert('Please enter mobile number!');
    		$scope.detailCheck = false;
    	} else{
    		$scope.detailCheck = true;
    	}
    	if($scope.detailCheck == true){
    		$http.post('/saveBookingDetails',{
	    		guestDetails: guestDetails,
	    		booking: true
	    	}, {
                headers : {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
                }
            }).then(function(err, response){
	    		console.log('----------------In saveBookingDetails success-----------------');
	    		
	    		// $("#dismissModal").click(function(){
			        // $("#myModal").modal("hide");
			    // });
	    		$scope.guest = {};
	    	})
    	}
    	
    } 
});