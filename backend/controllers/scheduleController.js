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

  const { _id } = await Schedule.create({
    property,
    date,
    user: req.user._id,
  })

  console.log(typeof mongoose.Types.ObjectId(_id))

  const user = await User.findById(req.user._id)
  const foundProperty = await Property.findById(req.params.id)

  if (foundProperty) {
    console.log(foundProperty)
    foundProperty.schedule.push(_id)
    await foundProperty.save()
  }

  if (user) {
    console.log(user)
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
  const { property, date } = req.body

  const { _id } = await Schedule.create({
    property,
    date,
    user: req.user._id,
  })

  console.log(typeof mongoose.Types.ObjectId(_id))

  const user = await User.findById(req.user._id)
  const foundProperty = await Property.findById(req.params.id)

  if (foundProperty) {
    console.log(foundProperty)
    foundProperty.schedule.push(_id)
    await foundProperty.save()
  }

  if (user) {
    console.log(user)
    user.schedule = [...user.schedule, _id]
    await user.save()
  }

  res.status(200)
  res.json('Scheduled')
})

export { createSchedule }
