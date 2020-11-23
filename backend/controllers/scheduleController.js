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
  console.log('userProperty', userProperty)
  if (userProperty) {
    userProperty.map(async (property) => {
      if (property.schedule.length !== 0) {
        property.schedule.map(async (sched) => {
          const schedule = await Schedule.findById(sched)
          console.log('schedule', schedule)
          const scheduledUser = await User.findById(schedule.user)
          console.log('scheduledUser', scheduledUser)
          schedules.push('123')

          // schedules.push({
          //   date: schedule.date,
          //   property: property,
          //   bookedBy: scheduledUser,
          // })
        })
      }
    })
  }

  console.log(schedules)

  res.status(200)
  res.json(schedules)
})

export { createSchedule, getSchedule }
