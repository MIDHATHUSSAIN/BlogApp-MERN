const express = require('express')
const GuestGetBlog = require('../controller/guest.Router')
const router = express.Router()

router.get('/',GuestGetBlog)

module.exports = router