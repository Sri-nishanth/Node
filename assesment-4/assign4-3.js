var Joi = require('joi');
 
const schema = Joi.object().keys({
    name: Joi.string().required(),
    age: Joi.number().min(17).max(30).required(),
    subject: Joi.array().required(),
    cgpa: Joi.number().min(6).max(10).required(),
    email: Joi.string().email().required()
});
 
const result = Joi.validate({  name: "test",
age: 20,
email: "test@yopmail.com",
subject: ["A1", "A2", "B1", "B2"],
cgpa: 8
 }, schema);
if(result.error == null)
 console.log(result.value);
