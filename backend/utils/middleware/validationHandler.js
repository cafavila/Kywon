const boom = require('@hapi/boom')
const joy = require('@hapi/joi')

function validate(data, schema) {
    const {error} = joy.validate(data, schema)
    return error
}

function validateHandler(schema, check = "body") {
    return function(req, res, next) {
        const error = validate(req[check], schema)
        error ? next(boom.badRequest(error)) : next()
    }
}

module.exports = validateHandler