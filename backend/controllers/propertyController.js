import asyncHandler from 'express-async-handler'
import Property from '../models/propertyModel.js'

// @desc    Fetch all properties along with pagination for every 4 pages
// @route   GET /api/property
// @access  Public
const getProperty = asyncHandler(async (req, res) => {
  const pageSize = 20
  const page = Number(req.query.pageNumber) || 1

  const keyword = req.query.keyword
    ? {
        name: {
          $regex: req.query.keyword,
          $options: 'i',
        },
      }
    : {}

  const count = await Property.countDocuments({ ...keyword })
  const properties = await Property.find({ ...keyword })
    .limit(pageSize)
    .skip(pageSize * (page - 1))
  res.json({ properties, page, pages: Math.ceil(count / pageSize) })
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

// @desc    Delete a product
// @route   DELETE /api/products/:id
// @access  Private/Admin
// const deleteProperty = asyncHandler(async (req, res) => {
//   const property = await Property.findById(req.params.id)

//   if (property) {
//     await property.remove()
//     res.json({ message: 'Property removed' })
//   } else {
//     res.status(404)
//     throw new Error('Property not found')
//   }
// })

// @desc    Create a product
// @route   POST /api/products
// @access  Private/Admin
// const createProperty = asyncHandler(async (req, res) => {
//   const property = new Property({
//     name: 'Sample name',
//     images: '/images/airpods.jpg',
//     description: 'saample data',
//     size: 0,
//     bedrooms: 0,
//     bathrooms: 0,
//     country: 'sample',
//     price: 0,
//     maintainance: 0,
//     year: 0,
//     location: 'sample',
//   })

//   const createProperty = await property.save()
//   res.status(201).json(createdProperty)
// })

// // @desc    Update a product
// // @route   PUT /api/products/:id
// // @access  Private/Admin
// const updateProduct = asyncHandler(async (req, res) => {
//   const {
//     name,
//     price,
//     description,
//     image,
//     brand,
//     category,
//     countInStock,
//   } = req.body

//   const product = await Product.findById(req.params.id)

//   if (property) {
//     product.name = name
//     product.price = price
//     product.description = description
//     product.image = image
//     product.brand = brand
//     product.category = category
//     product.countInStock = countInStock

//     const updatedProduct = await product.save()
//     res.json(updatedProduct)
//   } else {
//     res.status(404)
//     throw new Error('Product not found')
//   }
// })

// // @desc    Create new review
// // @route   POST /api/products/:id/reviews
// // @access  Private
// const createProductReview = asyncHandler(async (req, res) => {
//   const { rating, comment } = req.body

//   const product = await Product.findById(req.params.id)

//   if (product) {
//     const alreadyReviewed = product.reviews.find(
//       (r) => r.user.toString() === req.user._id.toString(),
//     )

//     if (alreadyReviewed) {
//       res.status(400)
//       throw new Error('Product already reviewed')
//     }

//     const review = {
//       name: req.user.name,
//       rating: Number(rating),
//       comment,
//       user: req.user._id,
//     }

//     product.reviews.push(review)

//     product.numReviews = product.reviews.length

//     product.rating =
//       product.reviews.reduce((acc, item) => acc + item.rating, 0) /
//       product.reviews.length

//     await product.save()
//     res.status(201).json({ message: 'Review added' })
//   } else {
//     res.status(404)
//     throw new Error('Product not found')
//   }
// })

// // @desc    Get 3 top rated products
// // @route   GET /api/products/top
// // @access  Public
// const getTopProducts = asyncHandler(async (req, res) => {
//   const products = await Product.find({}).sort({ rating: -1 }).limit(3)

//   res.json(products)
// })

export {
  getProperty,
  getPropertyById,
  // deleteProduct,
  // createProduct,
  // updateProduct,
  // createProductReview,
  // getTopProducts,
}
