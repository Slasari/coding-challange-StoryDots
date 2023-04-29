const {Router} = require('express')
const userRegister = require('../controllers/userControllers.js')

const router = Router()

router.post('/register', userRegister)

module.exports = router