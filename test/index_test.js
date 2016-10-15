var
	holidays = require('../index'),
	expect = require('chai').expect;

describe('Holidays', function () {
	it('a holiday', function () {
		expect(holidays.isHoliday(new Date(2048,12-1,25))).to.not.be.null;
	});

	it('holidays between', function () {
		expect(holidays.between(new Date(2015,0,1),new Date(2016,0,1)).length).to.be.equal(12);
	})
});
