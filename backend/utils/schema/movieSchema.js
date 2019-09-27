const joy = require('@hapi/joi')

const movieIdSchema = joy.string().regex(/^[0-9a-fA-F]{24}$/)
const movieTitleSchema = joy.string().max(80)
const movieYearSchema = joy.number().min(1888).max(2088)
const movieCoverSchema = joy.string().uri()
const movieDescriptionSchema = joy.string().max(300)
const movieDurationSchema = joy.number().min(1).max(300)

const createMovieSchema = {
    title: movieTitleSchema.required(),
    year: movieYearSchema.required(),
    cover: movieCoverSchema.required(),
    decription: movieDescriptionSchema.required(),
    duration: movieDurationSchema.required()
}

const updateMovieSchema = {
    title: movieTitleSchema,
    year: movieYearSchema,
    cover: movieCoverSchema,
    decription: movieDescriptionSchema,
    duration: movieDurationSchema
}

module.exports = {movieIdSchema, createMovieSchema, updateMovieSchema}