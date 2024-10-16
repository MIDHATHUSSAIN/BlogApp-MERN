const express = require('express')
const router = express.Router()
const ReaderGetBlog = require('../../controller/ReaderController/ReaderBlog.controller')

router.get('/',ReaderGetBlog)

module.exports = router