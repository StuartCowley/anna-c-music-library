const express = require('express')
const albumController = require('../controllers/album')

const albumRouter = express.Router()

albumRouter.post('/artist/:artistId/album', albumController.create)

albumRouter.get('/artist/:artistId/album', albumController.read)

albumRouter.get('/artist/:artistId/album/:albumId', albumController.readById)

albumRouter.patch('/artist/:artistId/album/:albumId', albumController.update)

albumRouter.delete('/artist/:artistId/album/:albumId', albumController.delete)

module.exports = albumRouter
