const mongoose = require('mongoose');
var mongoURL = 'mongodb+srv://Rooms:qo0RgrqeyOKF7pJc@cluster0.b25ryir.mongodb.net/mern-rooms'

mongoose.connect(mongoURL, {useUnifiedTopology: true, useNewUrlParser: true})

var connection = mongoose.connection

connection.on('error' , () => {
    console.log('Mongo DB Connection failed')
})

connection.on('connected' , () => {
    console.log('Mongo DB Connection Successfully')
})

module.exports = mongoose