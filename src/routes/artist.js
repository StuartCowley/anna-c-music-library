// import artist controller into artist router and defined a POST route to connect to controller
const express = require('express')
const artistController = require('../controllers/artist')

const artistRouter = express.Router()

artistRouter.post('/', artistController.create)

artistRouter.get('/', artistController.read)

artistRouter.get('/:artistId', artistController.readById)

artistRouter.patch('/:artistId', artistController.update)

artistRouter.delete('/:artistId', artistController.delete)

module.exports = artistRouter
