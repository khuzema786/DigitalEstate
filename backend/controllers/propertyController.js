import asyncHandler from 'express-async-handler'
import Property from '../models/propertyModel.js'

// @desc    Fetch all properties along with pagination for every 4 pages
// @route   GET /api/property
// @access  Public
const getProperty = asyncHandler(async (req, res) => {
  // const pageSize = 20
  // const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const location = req.query.location
  const option = req.query.option
  const type = req.query.type

  if (location && option && keyword) {
    const properties = await Property.find({
      location,
      option,
      ...keyword,
    })
    res.json({ properties })
  } else if (location && option) {
    const properties = await Property.find({
      location,
      option,
    })
    res.json({ properties })
  } else if (option && type) {
    const properties = await Property.find({
      option,
      type,
    })
    res.json({ properties })
  } else if (location) {
    const properties = await Property.find({
      location,
    })
    res.json({ properties })
  } else if (option) {
    const properties = await Property.find({
      option,
    })
    res.json({ properties })
  } else if (keyword) {
    const properties = await Property.find({
      ...keyword,
    })
    res.json({ properties })
  }
})

// @desc    Fetch single property
// @route   GET /api/property/:id
// @access  Public
const getPropertyById = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id)

  if (property) {
    res.json(property)
  } else {
    res.status(404)
    throw new Error('property not found')
  }
})

// @desc    get all provider property
// @route   get /api/property/list
// @access  Private/Provider
const getProviderProperty = asyncHandler(async (req, res) => {
  const property = await Property.find({ user: req.user._id })

  if (property) {
    res.json(property)
  } else {
    res.status(404)
    throw new Error('Property not found')
  }
})

// @desc    Create a property
// @route   POST /api/property
// @access  Private/Property
const createProperty = asyncHandler(async (req, res) => {
  await Property.create({
    ...req.body,
    user: req.user._id,
  })
  res.status(200)
  res.json('Property Created')
})

// @desc    Update a property
// @route   PUT /api/property/:id
// @access  Private/Provider
const updateProperty = asyncHandler(async (req, res) => {
  const {
    name,
    price,
    images,
    country,
    description,
    location,
    option,
    bathrooms,
    bedrooms,
    maintainance,
    size,
    type,
    year,
  } = req.body

  const property = await Property.findById(req.params.id)

  if (property) {
    property.name = name
    property.price = price
    property.images = images
    property.country = country
    property.description = description
    property.location = location
    property.option = option
    property.bathrooms = bathrooms
    property.bedrooms = bedrooms
    property.maintainance = maintainance
    property.size = size
    property.type = type
    property.year = year

    const updatedProperty = await property.save()
    res.json(updatedProperty)
  } else {
    res.status(404)
    throw new Error('Product not found')
  }
})

// @desc    Delete a property
// @route   DELETE /api/property/:id
// @access  Private/Provider
const deleteProperty = asyncHandler(async (req, res) => {
  const property = await Property.findById(req.params.id)

  if (property) {
    await property.remove()
    res.json({ message: 'Property removed' })
  } else {
    res.status(404)
    throw new Error('Property not found')
  }
})

export {
  getProperty,
  getPropertyById,
  getProviderProperty,
  createProperty,
  updateProperty,
  deleteProperty,
}
