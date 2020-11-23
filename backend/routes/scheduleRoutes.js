import express from 'express'
const router = express.Router()
import { createSchedule } from '../controllers/scheduleController.js'
import { protect } from '../middleware/authMiddleware.js'

router.route('/:id').post(protect, createSchedule)

export default router
