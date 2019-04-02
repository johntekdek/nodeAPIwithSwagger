const Joi = require('joi')

// instantiate object
const createUserSchema = Joi.object().keys({
    name:Joi.string().required(),
    phone:Joi.number().required(),
    password:Joi.string().required()
})


module.exports = {
    'createUserSchema':createUserSchema
}