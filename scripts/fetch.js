var
	jscrap	= require('jscrap'),
	async	= require('async'),
	years	= [],
	months	= { janeiro: 1, fevereiro: 2, março: 3, abril: 4, maio: 5, junho: 6, julho: 7, agosto: 8, setembro: 9, outubro: 10, novembro: 11, dezembro: 12 },
	hdays	= [];

// Get the list of years from 2015 to 2050
for ( var x = 2015 ; x <= 2050 ; x++ )
	years.push(x);

async.mapSeries(years,
	function(y,next){
		process.stderr.write(y+":\n");
		jscrap.scrap("http://www.calendarr.com/brasil/feriados-"+y+"/",function(err,$){
			if ( err ) {
				console.log("Error getting "+y+" holidays: ",err);
				return next(err,null);
			}
			$(".col-sm-8 .list-holiday-box").each(function(holyEl){
				var
					day		= parseInt(holyEl.find(".holiday-day").text().trim()),
					month	= $(holyEl).parent().prev().text().trim(),
					name	= holyEl.find(".holiday-name").text().trim(),
					monthN	= months[month.toLowerCase()];

				if ( !monthN ) {
					console.log("No month number for '"+month+"'");
					//return next(new Error("No month number for '"+month+"'"),false);
				}
				hdays.push([y,monthN,day,name]);
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
