const boom = require('@hapi/boom')
const {config} = require('../../config')

function withErrorStack(error, stack) {
    if (config.dev) {
        return ({...error, stack})
    }
    return error
}

function wrapError(err, req, res, next){
    if (!err.isBoom) {
        next(boom.badImplementation(err))
    }
    next(err)
}

function logError(err, req, res, next) {
    console.log(err)
    next(err)
}

function errorHandler(err, req, res, next) {
    const {statusCode, payload} = err
    res.status(statusCode).json(withErrorStack(payload, err.stack))
}

module.exports = {logError, errorHandler, wrapError}