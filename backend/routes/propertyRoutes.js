import express from 'express'
const router = express.Router()
import {
  getProperty,
  getPropertyById,
} from '../controllers/propertyController.js'
// import { protect, admin } from '../middleware/authMiddleware.js'

router.route('/').get(getProperty)
// .post(protect, admin, createProduct)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
router.route('/:id').get(getPropertyById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

export default router
