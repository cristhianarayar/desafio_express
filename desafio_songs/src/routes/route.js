const router = require('express').Router()
const filesRouter = require('./files/file')

router.use('/', filesRouter)

module.exports = router