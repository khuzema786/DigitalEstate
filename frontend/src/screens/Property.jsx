import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Container } from 'react-bootstrap'
import Category from '../components/Category'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Header from '../components/Header'
import { ReactComponent as Bathroom } from '../assets/bathroom.svg'
import { ReactComponent as Bedroom } from '../assets/bedroom.svg'
import { ReactComponent as House } from '../assets/house.svg'
import { ReactComponent as Squarefit } from '../assets/squarefit.svg'
import MyCarousel from '../components/MyCarousel'
import { listProperty } from '../actions/propertyActions'

const location = {
  1: 'Pune',
  2: 'Kota',
  3: 'Kolkata',
  4: 'Mumbai',
  5: 'Jaipur',
}
const Property = ({ match }) => {
  const [selector, setSelector] = useState(0)
  const locationKey = match.params.location

  const dispatch = useDispatch()
  const propertyList = useSelector((state) => state.propertyList)
  const { loading, error, property } = propertyList
  const filterProperty = property.filter((p) => {
    if (selector === 0) return true
    else if (p.location === location[selector]) return true
    else return false
  })
  console.log(property)
  useEffect(() => {
    if (locationKey) {
      setSelector(locationKey)
    }
    //is used for a request for the products to the backend
    dispatch(listProperty())
  }, [dispatch, locationKey])
  return (
    <>
      <Header />
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container>
            <h3>Los Angeles, CA Homes for Sale & Real Estate</h3>
            <Row>
              <Category setSelector={setSelector} className="my-4" />
              <span className="mt-2" variant="primary">
                25678 Results
              </span>
            </Row>
            <Row>
              {filterProperty.map((pro) => (
                <Col sm={12} md={8} lg={6} xl={4} className="py-3">
                  <Card>
                    <Link to={`/property/${pro._id}`}>
                      <MyCarousel />
                    </Link>
                    <Card.Body>
                      <Link to={`/property/${pro._id}`}>
                        <Card.Title>
                          <h4>
                            <i class="fas fa-map-marker-alt"></i>&nbsp;
                            {pro.name}
                          </h4>
                          <h5>{pro.location}</h5>
                          <span>
                            <strong>${pro.price}</strong>
                          </span>
                        </Card.Title>
                      </Link>
                      <Card.Text>
                        <Row className="pt-3">
                          <Col className="p-2" xs={6} md={6}>
                            <House /> Type-{pro.type}
                          </Col>
                          <Col className="p-2" xs={6} md={6}>
                            <Squarefit /> {pro.size} Sq ft.
                          </Col>
                          <Col className="p-2" xs={6} md={6}>
                            <Bedroom /> {pro.bedrooms} Bedrooms
                          </Col>
                          <Col className="p-2" xs={6} md={6}>
                            <Bathroom />
                            {pro.bathrooms} Bathrooms
                          </Col>
                        </Row>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </>
      )}
    </>
  )
}
export default Property
