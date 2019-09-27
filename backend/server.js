const express = require('express')
const morgan = require('morgan')
const path = require('path')
const rfs = require('rotating-file-stream')
const fs = require('fs')
const app = express()

const {config} = require('./config/index')
const moviesApi = require('./routes/movies')
const {logError, errorHandler, wrapError} = require('./utils/middleware/errorHandlers')
const {notFoundHandler} = require('./utils/middleware/notFoundHandler')
const debug = require('debug')('app:server')

// Configuracion archivo de logs
const dirLog = __dirname + '/lognodejs'
if (!fs.existsSync(dirLog)) {
    fs.mkdir(dirLog, err => {
        if (err) {
            debug('[ERROR] No se pudo crear la carpeta - %s', err)
        }
    })
}
debug('[DEBUG] Contenido ruta de logs %s', dirLog)
fs.readdir(dirLog, (err, files) => {
    if (!err) {
        debug('[DEBUG] Files %s', files)
    }
    else {
        debug('[DEBUG] No hay archivos')
    }
})
//const accessLogStream = fs.createWriteStream(path.join(dirLog, 'access.log'), {flags: 'a'})
const accessLogStream = rfs('access.log', {interval: '1d', path: dirLog})

moviesApi(app)

// Middleware de bodyParser
app.use(express.json)

// Middleware de log de acceso
app.use(morgan('combined', {stream: accessLogStream}))

// Middleware de manejo de errores
app.use(notFoundHandler)
app.use(logError)
app.use(wrapError)
app.use(errorHandler)

app.listen(config.port, function(){
    debug('[DEBUG] Se inicia el servidor con estado RUNNING')
    console.log('[INFO] El Servidor paso a estado RUNNING en el puerto %s', config.port);
})