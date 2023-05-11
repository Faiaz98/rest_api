require('dotenv').config()
const express = require('express')
const dotenv = require('dotenv')
const mongoose = require('mongoose')

const app = express()

//Configuring routes
const allRoutes = require('./routes/routes')
app.use(allRoutes)

app.use(express.json())

//Db connection here
mongoose.connect('mongodb://127.0.0.1:27017/restApiDB');

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log('We are connected')
});

app.listen(process.env.PORT, () => {
    console.log('listening on port ' + process.env.PORT)
})