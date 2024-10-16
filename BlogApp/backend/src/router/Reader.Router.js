const express = require('express')
const router = express.Router()
const authorization = require('../middleware/authorization')
const roles = require('../utils/roles')
const ReaderRouterBlog = require('../router/Reader/Reader.Blog.Router')
const ReaderRouterComment = require('../router/Reader/Reader.Comment.Router')

router.use('/blog',authorization(roles.READER),ReaderRouterBlog)

router.use('/comment',authorization(roles.READER),ReaderRouterComment)

module.exports = router