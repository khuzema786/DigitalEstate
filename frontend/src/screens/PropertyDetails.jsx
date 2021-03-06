import React, { useEffect, useState } from 'react'
import { Col, Button, ListGroup, Card, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { listPropertyDetails } from '../actions/propertyActions'
import { createSchedule } from '../actions/scheduleActions'
import { ReactComponent as Bathroom } from '../assets/bathroom.svg'
import { ReactComponent as Bedroom } from '../assets/bedroom.svg'
import { ReactComponent as House } from '../assets/house.svg'
import { ReactComponent as Squarefit } from '../assets/squarefit.svg'
import { ReactComponent as MediaIcons } from '../assets/mediaIcons.svg'
import { addToShortlist } from '../actions/shortlistActions'
import DateTimePicker from 'react-datetime-picker'
import MyCarousel from '../components/MyCarousel'
import Loader from '../components/Loader'
import Message from '../components/Message'

const PropertyDetails = ({ match }) => {
  const dispatch = useDispatch()
  const [value, onChange] = useState(new Date())
  const propertyId = match.params.id
  console.log(value)

  const propertyDetails = useSelector((state) => state.propertyDetails)
  const { loading, error, property } = propertyDetails

  const shortList = useSelector((state) => state.shortlist)
  const { success } = shortList

  const propertySchedule = useSelector((state) => state.schedule)
  const { error: scheduleError, success: scheduleSuccess } = propertySchedule

  console.log(property)
  useEffect(() => {
    dispatch(listPropertyDetails(propertyId))
  }, [dispatch, propertyId])

  const scheduleHandler = () => {
    dispatch(createSchedule({ property: propertyId, date: value }))
  }

  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <MyCarousel image={property.images} />
          <Row className="p-3 px-5" style={{ backgroundColor: '#FCFCFC' }}>
            <Col md={8}>
              <Row className="pt-5">
                <Col className="p-3" xs={6} md={2}>
                  <House /> {property.type} Type
                </Col>
                <Col className="p-3" xs={6} md={2}>
                  <Squarefit /> {property.size} Sq ft.
                </Col>
                <Col className="p-3" xs={6} md={2}>
                  <Bedroom /> {property.bedrooms} Bedrooms
                </Col>
                <Col className="p-3" xs={6} md={2}>
                  <Bathroom /> {property.bathrooms} Bathrooms
                </Col>
              </Row>
              <Row className="p-3">{property.description}</Row>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <Row className="align-items-center">
                      <Col xs={6}>
                        <span>Total Price</span> <p>INR 1,47,890</p>
                      </Col>
                      <Col xs={6}>
                        <Button
                          style={{ backgroundColor: '#00B4A2', border: 'none' }}
                          type="submit"
                          variant="primary"
                        >
                          Send Request
                        </Button>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row className="justify-content-center" md={12}>
                      <h4 style={{ fontWeight: '700' }}>Go Tour This Home</h4>
                    </Row>
                    <Row className="align-items-center">
                      {[...Array(6)].map((_, i) => (
                        <Col xs={4} key={i}>
                          <Button
                            style={{
                              backgroundColor: 'transparent',
                              color: '#000',
                              border: '1px solid #00B4A2',
                              fontSize: '12px',
                              width: '95px',
                            }}
                            className="my-2"
                            type="submit"
                            variant="primary"
                          >
                            {new Date(86400000 * i).toString().split(' ')[0]}.
                            {new Date(86400000 * i).toString().split(' ')[1]}.
                            {new Date(86400000 * i).toString().split(' ')[2]}
                          </Button>
                        </Col>
                      ))}
                    </Row>
                    <Row className="align-items-center my-3 justify-content-center">
                      <DateTimePicker onChange={onChange} value={value} />
                    </Row>
                    <Row className="align-items-center justify-content-center">
                      <Button
                        style={{
                          backgroundColor: '#00B4A2',
                          color: '#fff',
                          border: '1px solid #00B4A2',
                        }}
                        className="my-2"
                        type="submit"
                        variant="primary"
                        onClick={() => {
                          scheduleHandler()
                        }}
                      >
                        Schedule Tour
                      </Button>
                    </Row>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row className="align-items-center justify-content-center">
                      <Button
                        style={{
                          backgroundColor: '#fff',
                          color: '#000',
                          border: '1px solid #000',
                        }}
                        className="my-2"
                        onClick={() => dispatch(addToShortlist(property._id))}
                      >
                        Add to shortlist
                      </Button>
                    </Row>
                  </ListGroup.Item>
                  {scheduleSuccess && (
                    <Message variant="info">{`Scheduled for ${
                      value.toString().split(' ')[0]
                    }.${value.toString().split(' ')[1]}.${
                      value.toString().split(' ')[2]
                    }`}</Message>
                  )}
                  {scheduleError && (
                    <Message variant="danger">{scheduleError}</Message>
                  )}
                  {success && <Message>Added To Shortlist</Message>}
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="p-3 px-5">
            <Col md={8}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h4>Features</h4>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Row>
                      <Col xs={6} md={3}>
                        <h6 className="my-4">Property Type:</h6>
                        <h6 className="my-4">Year Built:</h6>
                        <h6 className="my-4">Bathroom Features:</h6>
                      </Col>
                      <Col xs={6} md={3}>
                        <h6 className="my-4">{property.type}</h6>
                        <h6 className="my-4">{property.year}</h6>
                        <h6 className="my-4">{property.bathrooms} Full</h6>
                      </Col>
                      <Col xs={6} md={3}>
                        <h6 className="my-4">Country:</h6>
                        <h6 className="my-4">Maintainance Fee:</h6>
                      </Col>
                      <Col xs={6} md={3}>
                        <h6 className="my-4">{property.country}</h6>
                        <h6 className="my-4">{property.maintainance}</h6>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
            <Col md={4}>
              <Card>
                <ListGroup variant="flush">
                  <ListGroup.Item>
                    <h4>Location</h4>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
          <Row className="pt-1 px-5">
            <h4>Share</h4>
          </Row>
          <Row className="pb-2 px-5">
            <MediaIcons />
          </Row>
        </>
      )}
    </>
  )
}

export default PropertyDetails
