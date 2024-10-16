const express = require('express')
const { getAuthor, createAuthor, updateAuthor, deleteAuthor } = require('../../controller/AdminController/Admin.Author.Controller')
const router = express.Router()

router.get('/',getAuthor)
router.post('/',createAuthor)
router.patch('/:id',updateAuthor)
router.delete('/:id',deleteAuthor)

module.exports = router