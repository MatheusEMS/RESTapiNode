const Joi = require('@hapi/joi');
const constants = require('../constants')

const validateObjectSchema = (data,schema) => {
    const result = Joi.validate(data,schema);
    if(result.error){
        const errorDetails = result.error.details.map(value => {
            return {
                error: value.message,
                path: value.path
            };
        });
        return errorDetails;
    }
   return null;
}


module.exports.validateBody = (schema) => {
    return (req, res, next) => {
        let response = { ...constants.defaultServerResponse };
       const error =  validateObjectSchema(req.body, schema);
       if (error){
        response.body = error;
        response.message = constants.requestValidationMessages.BAD_REQUEST;
        return res.status(response.status).send(response);
       }
       return next();
    }
}

module.exports.validateQueryParams = (schema) => {
    return (req, res, next) => {
        let response = { ...constants.defaultServerResponse };
       const error =  validateObjectSchema(req.query, schema);
       if (error){
        response.body = error;
        response.message = constants.requestValidationMessages.BAD_REQUEST;
        return res.status(response.status).send(response);
       }
       return next();
    }
}