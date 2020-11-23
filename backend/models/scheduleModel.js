import mongoose from 'mongoose'

const scheduleSchema = mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    property: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Property',
    },
    date: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const Schedule = mongoose.model('Schedule', scheduleSchema)

export default Schedule
