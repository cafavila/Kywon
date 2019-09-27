const assert = require('assert')
const proxyrequire = require('proxyquire')
const {moviesMock, MoviesServiceMock} = require('../utils/mocks/movies')
const testServer = require('../utils/testserver')

describe('routes - movies', function () {
    const route = proxyrequire('../routes/movies', {'../services/movies': MoviesServiceMock})
    const request = testServer(route)

    describe('GET /movies', function() {
        it('deberia responder con status 200', function(done) {
            request.get('/api/movies').expect(200, done)
        })
        it('Esto deberia devolver una lista de peliculas', function(done){
            request.get('/api/movies').expect((err, res) => {
                assert.deepEqual(res.body, {data: moviesMock})
            })
            done()
        })
    })
})