const assert = require('assert')
const buildMessage = require('../utils/buildMessege')

describe('utils - buildMessage', function() {
    describe('Cuando recibe una entidad y una accion', function() {
        it('Deberia retornar el mensaje respectivo', function() {
            const result = buildMessage('movie', 'create')
            const expect = 'movie created'
            assert.strictEqual(result, expect)
        })
    })
})