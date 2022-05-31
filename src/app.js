const express = require('express')
// imported artistRouter
const artistRouter = require('./routes/artist')

const app = express()

app.use(express.json())

// direct all artists to artistController
app.use('/artist', artistRouter)

// app.get('/', (req, res) => {
//   res.status(200).json('Hello World Dumplings')
// })

module.exports = app
