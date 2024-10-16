const express = require('express')
const { AuthorGetBlog, AuthorCreateBlog, AuthorUpdateBlog, AuthorDeleteBlog } = require('../../controller/AuthorController/Author.Blog.controller')
const router = express.Router()
const upload = require('../../config/multer')

router.get('/',AuthorGetBlog)

router.post('/',upload.single('file'),AuthorCreateBlog)

router.patch('/:id',upload.single('file'),AuthorUpdateBlog)

router.delete('/:id',AuthorDeleteBlog)


module.exports = router