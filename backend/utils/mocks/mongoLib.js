const sinon = require('sinon')
const {moviesMock, filteredMoviesMock} = require('./movies')

const getAllStub = sinon.stub()
getAllStub.withArgs('movies').resolves(moviesMock)

const tagQuery = {tags: {$in: ['Animal']}}
getAllStub.withArgs('movies', tagQuery).resolves(filteredMoviesMock('Animal'))

const createStub = sinon.stub().resolves(moviesMock[0].id)

class MongoLibMock {
    getAll(collection, query) {
        return getAllStub(collection, query)
    }

    create(collection, data) {
        return createStub(collection, data)
    }
}

module.exports = {getAllStub, createStub, MongoLibMock}