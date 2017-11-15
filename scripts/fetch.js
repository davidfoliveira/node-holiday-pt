var
	jscrap	= require('jscrap'),
	async	= require('async'),
	years	= [],
	months	= { jan: 1, fev: 2, mar: 3, abr: 4, mai: 5, jun: 6, jul: 7, ago: 8, set: 9, out: 10, nov: 11, dez: 12 },
	hdays	= [];

// Get the list of years from 2015 to 2050
for ( var x = 2015 ; x <= 2050 ; x++ )
	years.push(x);

async.mapSeries(years,
	function(y,next){
		process.stderr.write(y+":\n");
		jscrap.scrap("http://www.calendarr.com/portugal/feriados-"+y+"/",function(err,$){
			if ( err ) {
				console.log("Error getting "+y+" holidays: ",err);
				return next(err,null);
			}

			// For each month
			$("span.holiday-month").each(function(monthSpan){
				var
					monthN = months[monthSpan.text().toLowerCase().substr(0,3)];

				if ( !monthN ) {
					console.log("No month number for '"+month+"'");
					return next(new Error("No month number for '"+month+"'"),false);
				}
				monthSpan.find("+ul.list-holidays .list-holiday-box").each(function(holyEl){
					var
						day	= parseInt(holyEl.find(".holiday-day").text().trim()),
						name	= holyEl.find(".list-holiday-title").text().trim();
					hdays.push([y,monthN,day,name]);
				});
			});

			return next(null,true);
		});
	},
	function(err){
		if ( err ) {
			return process.exit(-1);
		}
		console.log("module.exports = "+JSON.stringify(hdays)+";");
		return process.exit(0);
	}
);
