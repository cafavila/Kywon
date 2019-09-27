const {MongoClient, ObjectId} = require('mongodb')
const {config} = require('../config')

const USER = encodeURIComponent(config.db_user)
const PASS = encodeURIComponent(config.db_pass)
const DB_NAME = config.db_name
const DB_HOST = config.db_host
const DB_PORT = config.db_port
const MONGO_URI = `mongodb+srv://${USER}:${PASS}@${DB_HOST}:${DB_PORT}/${DB_NAME}?retryWrites=true&w=majority`

class MongoLib {
    constructor()
    {
        this.client = new MongoClient(MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true})
        this.db_name = DB_NAME
    }

    connect() {
        if (!MongoLib.connection) {
            MongoLib.connection = new Promise((resolve, reject) => {
                this.client.connect(err => {
                    if (err) {reject(err)}
                    console.log('[INFO] Conexion establecida satisfactoriamente a la DB ' + this.db_name)
                    resolve(this.client.db(this.db_name))
                })
            })
        }
        return MongoLib.connection
    }
    getAll(collection, query) {
        return this.connect().then(db => {
            return db.collection(collection).find(query).toArray()
        })
    }
    get(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({_id: ObjectId(id)})
        })
    }
    create(collection, data) {
        return this.connect().then(db => {
            return db.collection(collection).insertOne(data)
        }).then(result => result.insertedId)
    }
    update(collection, id, data) {
        return this.connect().then(db => {
            return db.collection(collection).updateOne({_id: ObjectId(id)}, {$set: data}, {upsert: true})
        }).then(result => result.upsertedId || id)
    }
    delete(collection, id) {
        return this.connect().then(db => {
            return db.collection(collection).findOne({_id: ObjectId(id)})
        }).then(() => id)
    }
}
module.exports = MongoLib