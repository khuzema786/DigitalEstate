import React from 'react'
import { Row, Col, Container, Card, CardDeck, Carousel } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Background from '../assets/Background.jpg'
import City1 from '../assets/city1.jpg'
import City2 from '../assets/city2.jpg'
import City3 from '../assets/city3.jpg'
import City4 from '../assets/city4.jpg'
import City5 from '../assets/city5.jpg'
import City6 from '../assets/city6.jpg'
import City7 from '../assets/city7.jpg'
import Kota from '../assets/kota.jpg'
import Kolkata from '../assets/kolkata.jpg'
import Jaipur from '../assets/jaipur.jpg'
import Dubai from '../assets/dubai.jpg'
import Sponsors from '../assets/sponsors.jpg'
const HomeScreen = ({ setclick }) => {
  const clickHandler = (s) => {
    setclick(s)
    console.log(s)
  }
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col xs={4} md={6} className="pt-5">
            <span>Digital Estate is</span>
            <h2>The real estate market</h2>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </Col>
          <Col xs={4} md={4}>
            <img
              src={Background}
              alt="background image"
              style={{ width: '40rem' }}
            />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col className="text-center pt-4">
            <span style={{ fontSize: '25px' }}>
              <strong>Explore our neighborhoods</strong>
            </span>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={6} md={4}>
            <Link to={`/property/location/${1}`}>
              <img
                src={City1}
                alt="city1"
                style={{ width: '319px', height: '264px' }}
              />
            </Link>
          </Col>
          <Col xs={6} md={4}>
            <Link to={`/property/location/${2}`}>
              <img
                src={City2}
                alt="city2"
                style={{ width: '319px', height: '264px' }}
              />
            </Link>
          </Col>
          <Col xs={6} md={4}>
            <Link to={`/property/location/${3}`}>
              <img
                src={City3}
                alt="city3"
                style={{ width: '319px', height: '264px' }}
              />
            </Link>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={6} md={6}>
            <Link to={`/property/location/${4}`}>
              <img
                src={City4}
                alt="city1"
                style={{ width: '512px', height: '300px' }}
              />
            </Link>
          </Col>
          <Col xs={6} md={6}>
            <Link to={`/property/location/${5}`}>
              <img
                src={City5}
                alt="city3"
                style={{ width: '512px', height: '300px' }}
              />
            </Link>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={6} md={6}>
            <Link to={`/property/location/${3}`}>
              <img
                src={City6}
                alt="city1"
                style={{ width: '512px', height: '300px' }}
              />
            </Link>
          </Col>
          <Col xs={6} md={6}>
            <Link to={`/property/location/${2}`}>
              <img
                src={City7}
                alt="city2"
                style={{ width: '512px', height: '300px' }}
              />
            </Link>
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="pt-5">
          <Col>
            <span style={{ fontSize: '20px' }}>
              <strong>Discover RealEstate trends in market</strong>
            </span>
          </Col>
        </Row>
        <Row className="pt-2">
          <Col>
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing</span>
          </Col>
        </Row>
        <CardDeck className="pt-5">
          <Card>
            <Card.Body>
              <Card.Title>01.</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>02.</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>03.</Card.Title>
              <Card.Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <Carousel className="pt-4" md={6}>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Kota}
              alt="First slide"
              style={{ width: '10rem', height: '20rem' }}
            />
            <Carousel.Caption>
              <h3>Kota</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Jaipur}
              alt="Third slide"
              style={{ width: '10rem', height: '20rem' }}
            />

            <Carousel.Caption>
              <h3>Jaipur</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Dubai}
              alt="Third slide"
              style={{ width: '10rem', height: '20rem' }}
            />

            <Carousel.Caption>
              <h3>Dubai</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={Kolkata}
              alt="Third slide"
              style={{ width: '10rem', height: '20rem' }}
            />

            <Carousel.Caption>
              <h3>Kolkata</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </Container>
      <Container>
        <Row className="pt-4">
          <img src={Sponsors} alt="sponsors" />
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
