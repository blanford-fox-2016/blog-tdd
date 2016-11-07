let express = require('express'),
app = express(),
mongoose = require('mongoose'),
bodyParser = require('body-parser'),
port = 8080,
config = require('config') //load db location from JSON files

let options = {
	server: {socketOptions: {keepAlive:1, connectTimeoutMS:30000 }},
	replset: {socketOptions: {keepAlive:1, connectTimeoutMS:30000 }}
}

mongoose.connect(config.DBHost, options)
let db = mongoose.connection
db.on('error', console.error.bind(console,'connection error'))

mongoose.Promise = global.Promise

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.text())
app.use(bodyParser.json({type:'application/json'}))

app.use(require('./app/routes'))

app.listen(port)
console.log("Ya udah jalan di port" + port)

module.exports = app