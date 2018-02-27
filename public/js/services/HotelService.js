angular.module('HotelService', []).factory('Hotel', ['$http', function($http) {

    return {
      
        get : function() {
            return $http.get('/api/getHotelList');
        },
        post : function() {
            return  $http.post('/api/checkUser');
        },

    }       

}]);