import React, { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../components/Message'
import Loader from '../components/Loader'
import FormContainer from '../components/FormContainer'
import { upload } from '../actions/uploadActions'
import { listPropertyDetails, updateProperty } from '../actions/propertyActions'
import { PROPERTY_UPDATE_RESET } from '../constants/propertyConstants'
import { UPLOAD_RESET } from '../constants/uploadConstants'

const EditProperty = ({ match, history }) => {
  const propertyId = match.params.id
  const [name, setName] = useState('')
  const [price, setPrice] = useState(0)
  const [country, setCountry] = useState('')
  const [location, setLocation] = useState('')
  const [maintainance, setMaintainance] = useState(0)
  const [size, setSize] = useState(0)
  const [description, setDescription] = useState('')
  const [type, setType] = useState('')
  const [option, setOption] = useState('')
  const [year, setYear] = useState(0)
  const [bathrooms, setBathrooms] = useState(0)
  const [bedrooms, setBedrooms] = useState(0)
  const [message, setMessage] = useState('')
  const [images, setImages] = useState('')

  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const uploadState = useSelector((state) => state.upload)
  const { uploading, uploadSuccess, path, message: uploadMessage } = uploadState

  const propertyDetails = useSelector((state) => state.propertyDetails)
  const { loading, error, property } = propertyDetails

  const updatePropertyState = useSelector((state) => state.propertyUpdate)
  const {
    loading: loadingUpdate,
    success,
    error: errorUpdate,
  } = updatePropertyState

  useEffect(() => {
    if (!userInfo) {
      history.push('/login')
    } else {
      if (success) {
        dispatch({ type: UPLOAD_RESET })
        dispatch({ type: PROPERTY_UPDATE_RESET })
        history.push('/provider/property/list')
      } else {
        if (!property.name || property._id !== propertyId) {
          dispatch(listPropertyDetails(propertyId))
        } else {
          setName(property.name)
          setImages(property.images)
          setPrice(property.price)
          setCountry(property.country)
          setLocation(property.location)
          setOption(property.option)
          setMaintainance(property.maintainance)
          setSize(property.size)
          setDescription(property.description)
          setType(property.type)
          setYear(property.year)
          setBathrooms(property.bathrooms)
          setBedrooms(property.bedrooms)
        }
        if (uploadSuccess) {
          setMessage(uploadMessage)
          setImages(path)
        }
      }
    }
  }, [
    success,
    userInfo,
    history,
    dispatch,
    property,
    propertyId,
    uploadMessage,
    uploadSuccess,
    path,
  ])

  const uploadFileHandler = async (e) => {
    const files = e.target.files
    const formData = new FormData()

    dispatch(upload(files, formData))
  }

  const submitHandler = (e) => {
    e.preventDefault()
    console.log(images)
    dispatch(
      updateProperty({
        _id: property._id,
        name,
        price,
        images,
        country,
        description,
        option,
        location,
        bathrooms,
        bedrooms,
        maintainance,
        size,
        type,
        year,
      }),
    )
  }

  return (
    <>
      <FormContainer>
        {error && <Message variant="danger">{error}</Message>}
        <h3 className="login-h3 pt-5">Update Property</h3>
        {loadingUpdate && <Loader />}
        {errorUpdate && <Message variant="danger">{errorUpdate}</Message>}
        {loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Form onSubmit={submitHandler}>
            <Form.Group controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                placeholder="Enter name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="price">
              <Form.Label>Price</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="image">
              <Form.Label>
                {message !== '' ? (
                  <strong>{message}</strong>
                ) : (
                  'Image (supports jpg/jpeg/png file formats)'
                )}
              </Form.Label>
              <Form.File
                id="image-file"
                label="Choose File"
                custom
                onChange={uploadFileHandler}
                multiple
              ></Form.File>
              {uploading && <Loader />}
            </Form.Group>

            <Form.Group controlId="location">
              <Form.Label>Location</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="bathrooms">
              <Form.Label>Number of bathrooms</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter no of bathrooms"
                value={bathrooms}
                onChange={(e) => setBathrooms(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="bedrooms">
              <Form.Label>Number of bedrooms</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter no of bedrooms"
                value={bedrooms}
                onChange={(e) => setBedrooms(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Control
                as="select"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="Pune">Pune</option>
                <option value="Kota">Kota</option>
                <option value="Kolkata">Kolkata</option>
                <option value="Mumbai">Mumbai</option>
                <option value="Jaipur">Jaipur</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="option">
              <Form.Label>Options: Buy/Sell/Rent</Form.Label>
              <Form.Control
                as="select"
                value={option}
                onChange={(e) => setOption(e.target.value)}
              >
                <option value="Buy">Buy</option>
                <option value="Sell">Sell</option>
                <option value="Rent">Rent</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="maintainance">
              <Form.Label>Maintainance</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter maintainance"
                value={maintainance}
                onChange={(e) => setMaintainance(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="size">
              <Form.Label>Size</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="type">
              <Form.Label>Type</Form.Label>
              <Form.Control
                as="select"
                value={type}
                onChange={(e) => setType(e.target.value)}
              >
                <option value="Houses">Houses</option>
                <option value="Apartments">Apartments</option>
                <option value="Offices">Offices</option>
                <option value="Land">Land</option>
              </Form.Control>
            </Form.Group>

            <Form.Group controlId="year">
              <Form.Label>Year</Form.Label>
              <Form.Control
                type="number"
                placeholder="Enter year"
                value={year}
                onChange={(e) => setYear(e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button
              style={{ backgroundColor: '#00B4A2', border: 'none' }}
              type="submit"
              variant="primary"
            >
              Update Property
            </Button>
          </Form>
        )}
      </FormContainer>
    </>
  )
}

export default EditProperty
