var
	holidays		= require('../index'),
	thisYHolidays	= holidays.between(new Date(2017,0,1),new Date(2018,0,1));

console.log("Holidays of 2017: ",thisYHolidays.length);
if ( thisYHolidays.length != 13 ) {
	console.log("Fail! 2017 has 9 holidays and we've got "+thisYHolidays.length);
	return process.exit(-1);
}
console.log("OK");
process.exit(0);
