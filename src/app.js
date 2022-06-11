const express = require('express')
// imported artistRouter
const artistRouter = require('./routes/artist')
const albumRouter = require('./routes/album')

const app = express()

app.use(express.json())

app.use(artistRouter)
app.use(albumRouter)

app.get('/', (req, res) => {
  res.status(200).json('Hello Big World')
})

module.exports = app
