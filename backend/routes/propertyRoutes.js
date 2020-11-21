import express from 'express'
const router = express.Router()
import {
  getProperty,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
  getProviderProperty,
} from '../controllers/propertyController.js'
import { protect, provider } from '../middleware/authMiddleware.js'

router.route('/').get(getProperty).post(protect, provider, createProperty)
router.route('/list').get(protect, provider, getProviderProperty)
// router.route('/:id/reviews').post(protect, createProductReview)
// router.get('/top', getTopProducts)
router
  .route('/:id')
  .get(getPropertyById)
  .delete(protect, provider, deleteProperty)
  .put(protect, provider, updateProperty)

export default router
