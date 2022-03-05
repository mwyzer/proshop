import express from 'express'
const router = express.Router()
import {} from '../controllers/productController.js'
import { getProducts, getProductById } from '../controllers/productRoutes'

router.route('/').get(getProducts)
router.route('/:id').get(getProductById)

export default router