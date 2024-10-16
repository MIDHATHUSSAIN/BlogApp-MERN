const express = require('express')
const { getComment, createComment, deleteComment } = require('../../controller/AdminController/Admin.Comment.controller')
const router = express.Router()

router.get('/',getComment)
router.post('/',createComment)
router.delete('/:id',deleteComment)

module.exports = router