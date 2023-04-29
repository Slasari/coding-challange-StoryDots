const {Router} = require('express')
const {getProducts, postProduct, deleteProduct, updateProduct} = require('../controllers/productControllers')

const router = Router()

router.get('/products', getProducts)
router.post('/products', postProduct)
router.delete('/products/:id', deleteProduct)
router.put('/products/:id', updateProduct)

module.exports = router