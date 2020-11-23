import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Container, Badge } from 'react-bootstrap'
import Category from '../components/Category'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Chatbottt from '../components/Bott'
import Header from '../components/Header'
import { ReactComponent as Bathroom } from '../assets/bathroom.svg'
import { ReactComponent as Bedroom } from '../assets/bedroom.svg'
import { ReactComponent as House } from '../assets/house.svg'
import { ReactComponent as Squarefit } from '../assets/squarefit.svg'
import MyCarousel from '../components/MyCarousel'
import { listProperty } from '../actions/propertyActions'
import { Route } from 'react-router-dom'
import SearchBox from '../components/SearchBox'
import Bott from '../components/Bott'
const location = {
  1: 'Pune',
  2: 'Kota',
  3: 'Kolkata',
  4: 'Mumbai',
  5: 'Jaipur',
}
const option = {
  1: 'Buy',
  2: 'Rent',
  3: 'Sell',
}
const Property = ({ match }) => {
  const keyword = match.params.keyword
  const [selector, setSelector] = useState(0)
  const [optioner, setOptioner] = useState(0)
  const [filterProperty, setFilterProperty] = useState([])

  const locationKey = match.params.location
  const optionKey = match.params.option

  const dispatch = useDispatch()
  const propertyList = useSelector((state) => state.propertyList)
  const { loading, error, property } = propertyList

  useEffect(() => {
    //is used for a request for the products to the backend
    const properties = async () => await dispatch(listProperty(keyword))
    properties()
    propertyFilter()

    if (locationKey) {
      setSelector(locationKey)
    }
    if (optionKey) {
      setOptioner(optionKey)
    }
  }, [dispatch, optionKey, optioner, selector, locationKey, keyword])

  function propertyFilter() {
    setFilterProperty(
      property.filter((p) => {
        console.log('yooooo ladkiiii')
        if (locationKey) {
          if (selector === 0) return true
          else if (p.location === location[selector]) return true
          else return false
        }
        if (optionKey) {
          if (p.option.toLowerCase() === option[optioner].toLowerCase())
            return true
          else return false
        } else return false
      }),
    )
  }

  return (
    <>
      {!keyword ? (
        <h3 className="pl-5">Los Angeles, CA Homes for Sale & Real Estate</h3>
      ) : (
        <span className="pl-5">
          <Link to="/property" className="btn btn-light ">
            Go Back
          </Link>
        </span>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container>
            <span className="pt-4">
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
            </span>

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
                    <Badge variant="info" className="p-2">
                      {pro.option}
                    </Badge>
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
            <Chatbottt />
          </Container>
          <Bott />
        </>
      )}
    </>
  )
}
export default Property
