"use strict";
var moment = require('moment');
//Object definition
var result = function (inBetween, nearDate, difference) {
	this.inBetween = inBetween;
	this.nearDate = nearDate;
	this.difference = difference;
}
var inBetween, nearDate, difference;
var x = moment("2018/10/01", ["DD-MM-YYYY", "YYYY/MM/DD", "MM-DD-YYYY", "MM-YYYY", "YYYY", moment.ISO_8601]).isValid();
var date = moment("2018/10/01", ["DD-MM-YYYY", "YYYY/MM/DD", "MM-DD-YYYY", "MM-YYYY", "YYYY", moment.ISO_8601]);
if (x) {
	var Start = moment("2018/09/20", "YYYY/MM/DD");
	var End = moment("2018/10/10", "YYYY/MM/DD");
	//To check if the date is inbetween the range inclusively
	if (date.isBetween(Start, End, null, '[]')) {
		inBetween = true;
	}
	else {
		inBetween = false;
	}
	//checking the diference duration and getting absolute of that
	let Start_Difference = Math.abs(Start.diff(date));
	let End_differnce = Math.abs(End.diff(date));
	console.log(Start_Difference, End_differnce)
	if (Start_Difference < End_differnce) {
		difference = Start_Difference;
		//formating it to the required output format
		nearDate = Start.format("YYYY/MM/DD");
	} else {
		difference = End_differnce;
		nearDate = End.format("YYYY/MM/DD");
	}
}
var result = new result(inBetween, nearDate, difference);
console.log(result);
