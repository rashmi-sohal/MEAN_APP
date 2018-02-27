'use strict';
var mongoose = require('mongoose');


var hotels = [{
	"name": "Hotel Leela Palace",
	"loction": "Haryana",
	"rating": 5,
	"nightly_price": 10000
}, {
	"name": "Radisson Blu",
	"loction": "Delhi",
	"rating": 5,
	"nightly_price": 8500
}, {
	"name": "Crowne Plaza",
	"loction": "Haryana",
	"rating": 5,
	"nightly_price": 9000
}, {
	"name": "Country Inn and Suites",
	"loction": "Delhi",
	"rating": 4,
	"nightly_price": 5000
}, {
	"name": "City Park",
	"location": "Delhi",
	"rating": 4,
	"nightly_price": 4500
}, {
	"name": "Ibis Hotel",
	"loction": "Delhi",
	"rating": 3,
	"nightly_price": 3000
}];

exports.getHotelList = function(req, res){
    console.log('getHotelList-------------------',hotels);
    res.send({
    	list: hotels
    })
};

exports.saveBookingDetails = function(req, res){
    console.log('req.body-------------------',req.body);
    res.send('yayyy')
};
