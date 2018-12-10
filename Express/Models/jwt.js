var jwt = require('jsonwebtoken');
var Ajv = require('ajv');
var ajv = new Ajv();

function returnJwtToken(x) {
	token = jwt.sign({ ourRequest: x }, 'name');
	encrypted = "The jwt token for the input recieved is " + token;
	return encrypted;
}
function validate() {
	const schema = {
		"type": ["number", "string"],
		"pattern": "[a-zA-Z0-9_.-]+"
	}
	let y = jwt.verify(token, 'name');
	let z = ajv.validate(schema, y.ourRequest);
	return z;
}

module.exports = {
	returnJwtToken,
	validate
}
