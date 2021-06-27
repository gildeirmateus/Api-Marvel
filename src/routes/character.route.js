const express = require('express')
const controller = require('../controller/character.controller')
const router = express.Router()

router.get('/v1/public/characters', controller.listAll)
router.get('/v1/public/characters/:characterId', controller.getCharacter)
router.get('/v1/public/characters/:characterId/comics', controller.listComics)
router.get('/v1/public/characters/:characterId/events', controller.listEvents)
router.get('/v1/public/characters/:characterId/series', controller.listSeries)
router.get('/v1/public/characters/:characterId/stories', controller.listStories)

module.exports = router 