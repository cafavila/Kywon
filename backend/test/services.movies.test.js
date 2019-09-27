const assert = require('assert')
const proxyquire = require('proxyquire')
const {MongoLibMock, getAllStub} = require('../utils/mocks/mongoLib')
const {moviesMock} = require('../utils/mocks/movies')

describe('services - movies', async function() {
    const MoviesServices = proxyquire('../services/movies', {'../lib/mongodb': MongoLibMock})
    const moviesServices = new MoviesServices()
    describe('Cuando es llamado el metodo getMovies', async function() {
        it('Deberia llamar al metodo getAll de MongoLib', async function() {
            await moviesServices.getMovies({})
            assert.strictEqual(getAllStub.called, true)
        })
        it('Deberia rellenar un Arreglo de Movies', async function() {
            const result = await moviesServices.getMovies({})
            const expected = moviesMock
            assert.deepEqual(result, expected)
        })
    })
})