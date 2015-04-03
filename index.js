"use strict";

var
	holidays = require('./holidays');

// Get the holidays between date a and b
exports.between = function(a,b) {

	var
		res = [];

	for ( var x = 0 ; x < holidays.length ; x++ ) {
		var h = holidays[x];
		if ( h[0] > b.getFullYear() || (h[0] == b.getFullYear() && h[1] > b.getMonth()+1) || (h[0] == b.getFullYear() && h[1] == b.getMonth()+1 && h[2] >= b.getDate()) )
			break;
		if ( h[0] >= a.getFullYear() && h[1] >= a.getMonth()+1 && h[2] >= a.getDate() ) {
			var d = new Date(h[0],h[1]-1,h[2]);
			res.push({name: h[3], date: d});
		}
	}

	return res;

};


// Check if a specific date is a holiday
exports.isHoliday = function(dt) {

	var
		y = dt.getFullYear(),
		m = dt.getMonth()+1,
		d = dt.getDate();

	for ( var x = 0 ; x < holidays.length ; x++ ) {
		var h = holidays[x];
		if ( h[0] == y && h[1] == m && h[2] == d )
			return {name: h[3], date: dt};
	}

	return null;

};
