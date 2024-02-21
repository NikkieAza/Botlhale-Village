const express = require('express');

const app = express();

const dbConfig = require('./db')
const roomRoute = require('./router/roomsRoute')
const usersRoute = require('./router/userRoute')
const bookingRoute = require('./router/bookingRoute')



app.use(express.json())

app.use('/api/rooms', roomRoute)
app.use('/api/users', usersRoute)
app.use('/api/bookings', bookingRoute)

const port = process.env.PORT || 5000;

app.listen(port, () => {
   console.log(`Node Server Started using nodemon`);
});