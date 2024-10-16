const  express = require('express')
const { getUser, createUser, deleteUser, updateUser } = require('../../controller/AdminController/Admin.User.controller')
const router = express.Router()

router.get('/',getUser)
router.post('/',createUser)
router.delete('/:id',deleteUser)
router.patch('/:id',updateUser)


module.exports = router