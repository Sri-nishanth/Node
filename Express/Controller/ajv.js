var Ajv = require('ajv');
const ajv = new Ajv();

const schema_1 = {
    "type": ["number", "string"]
}
const schema_2 = {
    "type": "string",
    "maxLength": 20
}
const schema_3 = {
    "type": "integer"
}
function validateSchema2(args) {
    return ajv.validate(schema_2, args);
}

function validateSchema1(args) {
    return ajv.validate(schema_1, args);
}

function validateSchema3(args) {
    return ajv.validate(schema_3, args);
}

module.exports = {
    validateSchema1,
    validateSchema2,
    validateSchema3,
}