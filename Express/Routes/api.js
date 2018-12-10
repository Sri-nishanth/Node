var express = require('express');
var router = express.Router();
var ajv = require('../Controller/ajv.js');
var armstrong = require('../Models/armstrong.js');
var printMultiples = require('../Models/multiply.js');
var Jwt = require('../Models/jwt.js');
var sentenceToObject = require('../Models/toObject.js')

router.get('/jwt/:generate', (req, res) => {
	var our_text = req.params.generate;
	// console.log(ajv.validateSchema1(our_text));
	if (ajv.validateSchema1(our_text)) {
		if (our_text.toLowerCase() === "validate") {
			let y = Jwt.validate;
			res.send(y());
		} else {
			var y = Jwt.returnJwtToken;
			res.send(y(our_text));
		}
	}
});

router.get('/multiply/:number', (req, res) => {
	let Num = req.params.number;
	// console.log(ajv.validateSchema1(Num));
	if (ajv.validateSchema1(Num)) {
		let arr = printMultiples(Num);
		//console.log(arr)
		res.send("The first ten multiples of " + Num + " are " + arr);
	}

});

router.get('/object/:sentence', (req, res) => {
	let x = req.params.sentence;
	if (ajv.validateSchema2(x)) {
		res.send(sentenceToObject(x));
	} else {
		res.send("Enter less than 20 letters");
	}
});

router.get('/armstrong', (req, res) => {
	let Num = req.query.id;
	Num = parseInt(Num);
	if (ajv.validateSchema3(Num)) {
		if (armstrong(Num))
			res.send("True!! It is an armstrong number");
		else
			res.send("False!! Try some other number")
	} else {
		res.send("Enter an integer");
	}
});


module.exports = router;