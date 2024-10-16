const express = require('express')
const ReaderCommentPost = require('../../controller/ReaderController/ReaderComment.controller')
const router = express.Router()


router.post('/',ReaderCommentPost)

module.exports = router