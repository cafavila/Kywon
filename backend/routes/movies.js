const express = require('express')
const MoviesService = require('../services/movies')
const {movieIdSchema, createMovieSchema, updateMovieSchema} = require('../utils/schema/movieSchema')
const validationHandler = require('../utils/middleware/validationHandler')
const cacheResponse = require('../utils/cacheResponde')
const {FIVE_MINUTES_IN_SECONDS, SIXTY_MINUTES_IN_SECONDS} = require('../utils/time')

function moviesApi(app) {
    const router = express.Router()
    app.use("/api/movies", router)
    const moviesService = new MoviesService()

    router.get("/", async function(req, res, next) {
        cacheResponse(res, FIVE_MINUTES_IN_SECONDS)
        const {tags} = req.query
        try {
            const movies = await moviesService.getMovies({tags})
            res.status(200).json({
                status: 200,
                message: "Listado de Peliculas",
                data: movies
            })
        } catch (err) {
            next(err)
        }
    })
    router.get("/:movieId", validationHandler({movieId: movieIdSchema}, 'params'), async function(req, res, next){
        const {movieId} = req.params
        try {
            const movies = await moviesService.getMovie({movieId})
            res.status(200).json({
                status: 200,
                message: "Pelicula Recibida",
                data: movies
            })
        } catch (err) {
            next(err)
        }
    })
    router.post("/", validationHandler(createMovieSchema), async function(req, res, next){
        const {body: movie} = req
        try {
            const createdMovieId = await moviesService.createMovie({body})
            res.status(200).json({
                status: 200,
                message: "Pelicula Creada",
                data: createdMovieId
            })
        } catch (err) {
            next(err)
        }
    })
    router.put("/:movieId", validationHandler({movieId: movieIdSchema}, 'params'), validationHandler(updateMovieSchema), async function(req, res, next){
        const {body: movie} = req
        const {movieId} = req.params
        try {
            const updatedMovieId = await moviesService.updateMovie({movieId, movie})
            res.status(200).json({
                status: 200,
                message: "Pelicula Actualizada",
                data: updatedMovieId
            })
        } catch (err) {
            next(err)
        }
    })
    router.delete("/:movieId", validationHandler({movieId: movieIdSchema}, 'params'), async function(req, res, next){
        const {movieId} = req.params
        try {
            const deletedMovieId = await moviesService.deteteMovie({movieId})
            res.status(200).json({
                status: 200,
                message: "Pelicula eliminada",
                data: deletedMovieId
            })
        } catch (err) {
            next(err)
        }
    })
}
module.exports = moviesApi