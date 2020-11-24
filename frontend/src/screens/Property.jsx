import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Row, Col, Card, Container, Badge } from 'react-bootstrap'
import Category from '../components/Category'
import Message from '../components/Message'
import Loader from '../components/Loader'
import Chatbottt from '../components/Bott'
import { ReactComponent as Bathroom } from '../assets/bathroom.svg'
import { ReactComponent as Bedroom } from '../assets/bedroom.svg'
import { ReactComponent as House } from '../assets/house.svg'
import { ReactComponent as Squarefit } from '../assets/squarefit.svg'
import MyCarousel from '../components/MyCarousel'
import { listProperty } from '../actions/propertyActions'
import { Route } from 'react-router-dom'
import SearchBox from '../components/SearchBox'

const Property = ({ match }) => {
  const keyword = match.params.keyword
  const type = match.params.type

  const locationKey = match.params.location
  const optionKey = match.params.option

  const dispatch = useDispatch()
  const propertyList = useSelector((state) => state.propertyList)
  const { loading, error, property } = propertyList
  console.log(property)
  useEffect(() => {
    //is used for a request for the products to the backend
    dispatch(listProperty(keyword, locationKey, optionKey, type))
  }, [dispatch, optionKey, locationKey, keyword, type])

  return (
    <>
      {!keyword ? (
        <Container>
          <h3 style={{ fontWeight: '800' }} className="my-5">
            Los Angeles, CA Homes for Sale & Real Estate
          </h3>
        </Container>
      ) : (
        <Container>
          <span className="py-5">
            <Link to="/property" className="btn btn-light ">
              Go Back
            </Link>
          </span>
        </Container>
      )}
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <>
          <Container>
            <Row className="my-4 justify-content-between">
              <Route
                render={({ history }) => <SearchBox history={history} />}
              />
              <Row>
                <span className="mt-2" variant="primary">
                  <strong>{property.length}</strong> Results
                </span>
                <Link to={`/location/${locationKey}`}>
                  <Category />
                </Link>
              </Row>
            </Row>
            <Row>
              {property?.map((pro) => (
                <Col sm={12} md={8} lg={6} xl={4} className="py-3">
                  <Card>
                    <Badge variant="primary" className="p-2">
                      {pro.option}
                    </Badge>
                    <Link to={`/property/${pro._id}`}>
                      <MyCarousel image={pro.images} />
                    </Link>

                    <Card.Body>
                      <Card.Title>
                        <h4>
                          <Link to={`/property/${pro._id}`}>{pro.name}</Link>
                        </h4>
                        <h5>
                          <i class="fas fa-map-marker-alt"></i>&nbsp;
                          {pro.location}
                        </h5>
                        <span>
                          <strong>${pro.price}</strong>
                        </span>
                      </Card.Title>
                      <Card.Text>
                        <Row className="pt-3">
                          <Col className="p-2" xs={6} md={6}>
                            <House /> {pro.type}
                          </Col>
                          <Col className="p-2" xs={6} md={6}>
                            <Squarefit /> {pro.size} Sq ft.
                          </Col>
                          <Col className="p-2" xs={6} md={6}>
                            <Bedroom /> {pro.bedrooms} Bedrooms
                          </Col>
                          <Col className="p-2" xs={6} md={6}>
                            <Bathroom /> {pro.bathrooms} Bathrooms
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
        </>
      )}
    </>
  )
}
export default Property
