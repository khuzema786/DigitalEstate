import express from 'express'
const router = express.Router()
import {
  createSchedule,
  getSchedule,
} from '../controllers/scheduleController.js'
import { protect, provider } from '../middleware/authMiddleware.js'

router.route('/').get(protect, provider, getSchedule)
router.route('/:id').post(protect, createSchedule)

export default router
