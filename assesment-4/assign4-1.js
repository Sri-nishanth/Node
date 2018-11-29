const Ajv = require('Ajv');
const ajv = new Ajv();
//this schema is trained for the validation that is required
var schema = {
  "type": ["object"],
  "required": ["name","age","cgpa","subjects","email"],
  "properties": {
    "name": { 
    	"type": "string"
    },
    "age": { 
    	"type": "number",
    	"minumum" : 16
    },
    "subjects": {
    	"items": { 
    		"type": "string"
    	}
    },
    "email" : {
    	"type" : "string",  
    	"pattern" : "([a-zA-Z0-9_.-]+)@([a-zA-Z]+).([a-zA-Z]+)"
    },
    "cgpa" :{
    	"type" : "number",
    	"exclusiveMinimum" : 5,
    	"maximum" : 10
    }
  },
  "additionalProperties" : false
}
// Schema from the example above
//const validate = ajv.compile(schema);
var data = {
	name : "Sri",
	subjects : ["A1", "A2","B1","B2"],
	age : 21,
	cgpa : 8,
	email : "srinishanth@rently.com"
}
console.log(ajv.validate(schema, data));
