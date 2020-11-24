import asyncHandler from 'express-async-handler'
import Schedule from '../models/scheduleModel.js'
import Property from '../models/propertyModel.js'
import User from '../models/userModel.js'
import mongoose from 'mongoose'

// @desc    Create a schedule
// @route   POST /api/schedule
// @access  Private
const createSchedule = asyncHandler(async (req, res) => {
  const { property, date } = req.body

  const user = await User.findById(req.user._id)

  if (user && user.isProvider) {
    res.status(404)
    throw new Error('Provider cannot schedule a property')
  }

  const { _id } = await Schedule.create({
    property,
    date,
    user: req.user._id,
  })

  const foundProperty = await Property.findById(req.params.id)

  if (foundProperty) {
    foundProperty.schedule.push(_id)
    await foundProperty.save()
  }

  if (user) {
    user.schedule = [...user.schedule, _id]
    await user.save()
  }

  res.status(200)
  res.json('Scheduled')
})

// @desc    Get a schedule
// @route   GET /api/schedule
// @access  Private
const getSchedule = asyncHandler(async (req, res) => {
  const schedules = []
  const userProperty = await Property.find({ user: req.user._id }) // Provider user property array

  if (!userProperty) {
    res.status(404)
    throw new Error("Provider User Does'nt Have any property added yet")
    return
  }

  for (const property of userProperty) {
    for (const sched of property.schedule) {
      const schedule = await Schedule.findById(sched)
      const scheduledUser = await User.findById(schedule.user)
      schedules.push({
        date: schedule.date,
        property: property,
        bookedBy: scheduledUser,
      })
    }
  }

  res.status(200)
  res.json(schedules)
})

export { createSchedule, getSchedule }
