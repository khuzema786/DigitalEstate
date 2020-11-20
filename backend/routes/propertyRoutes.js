import express from 'express'
const router = express.Router()
import {
  getProperty,
  getPropertyById,
  createProperty,
} from '../controllers/propertyController.js'
import { protect, provider } from '../middleware/authMiddleware.js'

router.route('/').get(getProperty).post(protect, provider, createProperty)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
router.route('/:id').get(getPropertyById)
//   .delete(protect, admin, deleteProduct)
//   .put(protect, admin, updateProduct)

export default router
