# holiday-pt - Portuguese holiday list and helper functions

## Installing

	npm install holiday-pt

## Usage

	var
	    holidays = require('holiday-pt');
	
	// Get a list of holidays between two dates
	curYearHolidays = holidays.between(new Date(2015,0,1),new Date(2016,0,1));
	
	// Check if a specific date is a holiday
	if ( holidays.isHoliday(new Date(2048,4-1,25)) ) {
	    console.log("Long live freedom!");
	}
