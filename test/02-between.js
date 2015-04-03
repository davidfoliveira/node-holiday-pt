var
	holidays		= require('../index'),
	thisYHolidays	= holidays.between(new Date(2015,0,1),new Date(2016,0,1));

console.log("Holidays of 2015: ",thisYHolidays.length);
if ( thisYHolidays.length != 9 ) {
	console.log("Fail! 2015 has 9 holidays and we've got "+thisYHolidays.length);
	return process.exit(-1);
}
console.log("OK");
process.exit(0);
