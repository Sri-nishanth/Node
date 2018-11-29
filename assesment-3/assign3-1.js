var values = process.argv;
var length = process.argv.length;
var dateString = values.slice(2,length+1);
var date = new Date(dateString);
Date.prototype.printDate = function(){
	var day = this.getDay();
	switch(day){
		case 0:
			console.log("Sunday");
			break;
		case 1:
			console.log("Monday");
			break;
		case 2:
			console.log("Tuesday");
			break;
		case 3:
			console.log("Wednesday");
			break;
		case 4:
			console.log("Thursday");
			break;
		case 5:
			console.log("Friday");
			break;
		case 6:
			console.log("saturday");
			break;

	}
}
date.printDate();
//console.log(day);
//console.log(values, length, dateString);