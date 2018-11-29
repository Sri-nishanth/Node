var express = require('express');
var router = express.Router();

var armstrong = require('../Models/armstrong.js');
var printMultiples = require('../Models/multiply.js');
var Jwt = require('../Models/jwt.js');
var sentenceToObject = require('../Models/toObject.js')

router.get('/jwt/:generate',(req, res) => {
	var x = req.params.generate;
	if(x.toLowerCase() === "validate"){
		let y = Jwt.validate;
		res.send(y());
	}else{
	var y = Jwt.returnJwtToken;
	res.send(y(x));
	}
});

router.get('/multiply/:number',(req, res) => {
	let x = req.params.number;
	let arr = printMultiples(x);
	res.send("The first ten multiples of " + x +" are " + arr);
})

router.get('/object/:sentence',(req, res) => {
	let x = req.params.sentence;
	res.send(sentenceToObject(x));
});

router.get('/armstrong',(req, res) => {
	if(armstrong(req))
		res.send("True!! It is an armstrong number");
	else 
		res.send("False!! Try some other number")
});


module.exports = router;