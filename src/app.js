const express = require('express')
// imported artistRouter
const artistRouter = require('./routes/artist')

const app = express()

app.use(express.json())

// direct all /artists request to artistController
app.use('/artist', artistRouter)

app.get('/', (req, res) => {
  res.status(200).json('Hello Big World')
})

module.exports = app
