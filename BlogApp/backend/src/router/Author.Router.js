const express = require('express')
const router = express.Router()
const roles = require('../utils/roles')
const authorization = require('../middleware/authorization')
const AuthorBlogRouter = require('./Author/Author.Blog.Router')

router.use('/blog',authorization(roles.AUTHOR),AuthorBlogRouter)

module.exports = router