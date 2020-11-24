import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
import MyCarousel from '../components/MyCarousel'
import { ReactComponent as Bathroom } from '../assets/bathroom.svg'
import { ReactComponent as Bedroom } from '../assets/bedroom.svg'
import { ReactComponent as House } from '../assets/house.svg'
import { ReactComponent as Squarefit } from '../assets/squarefit.svg'
import Message from '../components/Message'
import ProfileSteps from '../components/ProfileSteps'
import { listAllProperty, deleteProperty } from '../actions/propertyActions'

const PropertyList = ({ history }) => {
  const dispatch = useDispatch()

  const propertyDelete = useSelector((state) => state.propertyDelete)
  const {
    loading: loadingDelete,
    error: errorDelete,
    success: successDelete,
  } = propertyDelete

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const properties = useSelector((state) => state.allPropertyList)
  const { error: fetchError, property } = properties

  useEffect(() => {
    if (userInfo && !userInfo.isProvider) {
      history.push('/')
    }
    dispatch(listAllProperty())
  }, [dispatch, history, userInfo])

  const deleteHandler = (id) => {
    dispatch(deleteProperty(id))
  }

  return (
    <>
      {fetchError && <Message variant="danger">{fetchError}</Message>}
      {loadingDelete && <Message variant="danger">{loadingDelete}</Message>}
      {errorDelete && <Message variant="danger">{errorDelete}</Message>}
      {successDelete && <Message variant="danger">{successDelete}</Message>}

      {property?.length === 0 ? (
        <Message>
          You haven't added any properties yet <Link to="/">Go Back</Link>
        </Message>
      ) : (
        <>
          <Container>
            <ProfileSteps step2 />
            <Row>
              {property?.map((pro) => (
                <Col
                  sm={12}
                  md={8}
                  lg={6}
                  xl={4}
                  className="py-3"
                  key={pro._id}
                >
                  <Card>
                    <Link to={`/property/${pro._id}`}>
                      <MyCarousel image={pro.images} />
                    </Link>
                    <Card.Body>
                      <Row>
                        <Col xs={8}>
                          <Card.Title>
                            <Link to={`/property/${pro._id}`}>
                              <h4>
                                <i class="fas fa-map-marker-alt"></i>&nbsp;
                                {pro.name}
                              </h4>
                            </Link>
                            <h5>{pro.location}</h5>
                            <span>
                              <strong>${pro.price}</strong>
                            </span>
                          </Card.Title>
                        </Col>
                        <Col xs={2}>
                          <LinkContainer
                            to={`/provider/property/${pro._id}/edit`}
                          >
                            <Button
                              style={{
                                backgroundColor: '#00B4A2',
                                border: 'none',
                              }}
                              variant="primary"
                            >
                              <i class="fas fa-edit"></i>
                            </Button>
                          </LinkContainer>
                        </Col>
                        <Col xs={2}>
                          <Button
                            style={{
                              backgroundColor: '#00B4A2',
                              border: 'none',
                            }}
                            onClick={() => deleteHandler(pro._id)}
                            variant="primary"
                          >
                            <i class="fas fa-times-circle"></i>
                          </Button>
                        </Col>
                      </Row>
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

export default PropertyList
