var
	holidays = require('../index');


console.log("25-04-2048 is "+(holidays.isHoliday(new Date(2048,4-1,25))?'holiday':'not a holiday'));
if ( !holidays.isHoliday(new Date(2048,4-1,25)) ) {
	console.log("Fail! 25-04-2048 should be a holiday");
	return process.exit(-1);
}
console.log("OK");
return process.exit(0);
