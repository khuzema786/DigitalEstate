import React from 'react'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { Container, Row, Col, Card, Button } from 'react-bootstrap'
import MyCarousel from '../components/MyCarousel'
import { removeFromShortlist } from '../actions/shortlistActions'
import { ReactComponent as Bathroom } from '../assets/bathroom.svg'
import { ReactComponent as Bedroom } from '../assets/bedroom.svg'
import { ReactComponent as House } from '../assets/house.svg'
import { ReactComponent as Squarefit } from '../assets/squarefit.svg'
import Message from '../components/Message'
import ProfileSteps from '../components/ProfileSteps'

const Shortlist = () => {
  const dispatch = useDispatch()

  const shortList = useSelector((state) => state.shortlist)
  const { shortlistItems } = shortList
  console.log(shortlistItems)

  const removeFromShortlistHandler = (id) => {
    dispatch(removeFromShortlist(id))
  }

  return (
    <>
      {shortlistItems.length === 0 ? (
        <Message>
          Your shortlist is empty <Link to="/">Go Back</Link>
        </Message>
      ) : (
        <>
          <Container>
            <ProfileSteps step2 />
            <Row>
              {shortlistItems.map((pro) => (
                <Col sm={12} md={8} lg={6} xl={4} className="py-3">
                  <Card>
                    <Link to={`/property/${pro.property}`}>
                      <MyCarousel />
                    </Link>
                    <Card.Body>
                      <Row>
                        <Col md={10}>
                          <Card.Title>
                            <Link to={`/property/${pro.property}`}>
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
                        <Col md={2}>
                          <Button
                            style={{
                              backgroundColor: '#00B4A2',
                              border: 'none',
                            }}
                            onClick={() =>
                              removeFromShortlistHandler(pro.property)
                            }
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

export default Shortlist
