import mongoose from 'mongoose'

const propertySchema = mongoose.Schema(
  {
    schedule: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Schedule',
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
    },
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    images: [
      {
        type: String,
        required: true,
      },
    ],
    description: {
      type: String,
      required: true,
    },
    size: {
      type: Number,
      required: true,
    },
    option: {
      type: String,
      required: true,
    },
    bedrooms: {
      type: Number,
      required: true,
    },
    bathrooms: {
      type: Number,
      required: true,
    },
    location: {
      type: String,
      required: true,
    },
    country: {
      type: String,
      required: true,
    },
    year: {
      type: Number,
      required: true,
    },
    maintainance: {
      type: Number,
      required: true,
    },
    price: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
)

const Property = mongoose.model('Property', propertySchema)

export default Property
