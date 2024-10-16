const express = require('express')
const { getBlogs,getBlog ,createBlog, updateBlog, deleteBlog } = require('../../controller/AdminController/Admin.Blog.Controoler')
const router = express.Router()
const upload = require("../../config/multer")
router.get('/',getBlogs)
router.get('/:id',getBlog)
router.post('/',upload.single('file'),createBlog)
router.patch('/:id',upload.single('file'),updateBlog)
router.delete('/:id',deleteBlog)

module.exports = router