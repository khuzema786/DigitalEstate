import mongoose from 'mongoose'
import bcrypt from 'bcryptjs'

const documentSchema = mongoose.Schema({
  name: { type: String, required: true },
  required: false,
})

const userSchema = mongoose.Schema(
  {
    schedule: [
      {
        type: mongoose.Schema.Types.ObjectId,
        required: false,
        ref: 'Schedule',
      },
    ],
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    profilePic: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    document: [documentSchema],
    isProvider: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  },
)

userSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.password)
}

userSchema.pre('save', async function (next) {
  if (!this.isModified('password')) {
    next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
})

const User = mongoose.model('User', userSchema)

export default User
