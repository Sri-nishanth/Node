var express = require('express');
var app = express();

var routes = require('./Routes/api.js');
var index = require('./Routes/home.js')

app.use('/home', index);
app.use('/api', routes);

app.listen(3000, () => {
	console.log("Server has started!!");
	console.log("routes localhost:3000/home");
	console.log("routes localhost:3000/api/jwt/ENTER_YOUR_TEXT_HERE");
	console.log("routes localhost:3000/api/jwt/validate");
	console.log("routes localhost:3000/api/multiply/ENTER_YOUR_NUMBER_HERE");
	console.log("routes localhost:3000/api/object/ENTER_THE_SENTENCE_HERE");
	console.log("routes localhost:3000/api/armstrong/ENTER_NUMBER_AS_ID");
});

module.exports = app;