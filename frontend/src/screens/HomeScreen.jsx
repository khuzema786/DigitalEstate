import React from 'react'
import { Row, Col, Container, Card, CardDeck, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { ReactComponent as Sponsors } from '../assets/sponsors.svg'
import Background from '../assets/Background.jpg'
import City1 from '../assets/city1.jpg'
import City2 from '../assets/city2.jpg'
import City3 from '../assets/city3.jpg'
import City4 from '../assets/city4.jpg'
import City5 from '../assets/city5.jpg'
import City6 from '../assets/city6.jpg'
import City7 from '../assets/city7.jpg'

const HomeScreen = () => {
  return (
    <>
      <Container className="p-5">
        <Row>
          <Col xl={6} className="pt-5">
            <span style={{ fontSize: '20px', fontWeight: '400' }}>
              Digital Estate is
            </span>
            <h1 style={{ fontWeight: '900' }}>The real estate market</h1>
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </span>
          </Col>
          <Col xl={6} className="pt-2">
            <Image
              className="image-home"
              src={Background}
              alt="background image"
              fluid
            />
          </Col>
        </Row>
        <Row className="my-5">
          <Col className="text-center pt-4">
            <span style={{ fontSize: '27px' }}>
              <strong>Explore our neighborhoods</strong>
            </span>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={4}>
            <Link to={`/location/Pune`}>
              <Image src={City1} alt="city1" fluid />
            </Link>
          </Col>
          <Col xs={4}>
            <Link to={`/location/Kolkata`}>
              <Image src={City2} alt="city2" fluid />
            </Link>
          </Col>
          <Col xs={4}>
            <Link to={`/location/Kota`}>
              <Image src={City3} alt="city3" fluid />
            </Link>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={6} md={6}>
            <Link to={`/location/Jaipur`}>
              <Image src={City4} alt="city1" fluid />
            </Link>
          </Col>
          <Col xs={6} md={6}>
            <Link to={`/location/Mumbai`}>
              <Image src={City5} alt="city3" fluid />
            </Link>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={6}>
            <Link to={`/location/Pune`}>
              <Image src={City6} alt="city1" fluid />
            </Link>
          </Col>
          <Col xs={6}>
            <Link to={`/location/Mumbai`}>
              <Image src={City7} alt="city2" fluid />
            </Link>
          </Col>
        </Row>
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
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>02.</Card.Title>
              <Card.Text>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>03.</Card.Title>
              <Card.Text>
                <strong>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit
                </strong>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
        <iframe
          width="100%"
          height="450px"
          className="my-5"
          src="https://www.youtube.com/embed/IdejM6wCkxA"
          title="Real Estate"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
        <Row className="pt-4">
          <Sponsors />
        </Row>
      </Container>
    </>
  )
}

export default HomeScreen
