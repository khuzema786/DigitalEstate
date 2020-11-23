import React from 'react'
import {
  Row,
  Col,
  Container,
  Card,
  CardDeck,
  Carousel,
  Image,
} from 'react-bootstrap'
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
import Kota from '../assets/kota.jpg'
import Kolkata from '../assets/kolkata.jpg'
import Jaipur from '../assets/jaipur.jpg'
import Dubai from '../assets/dubai.jpg'
import Bott from '../components/Bott'

const homeStyle = {
  // carousel: {
  //   height: '70vh',
  // },
  image: {
    width: '100vw',
    height: '70vh',
    backgroundImage:
      'url("https://www.azcorealestate.ae/public/Uploads/imagetable/7e2d5f1cbef8035e7d36340282ecff03/3fgoV4oUYlQVbt1hyJxiMdc6UVcyJOFPrIQ6o1GO.jpeg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 50%',
  },
}
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
            <span style={{ fontSize: '30px' }}>
              <strong>Explore our neighborhoods</strong>
            </span>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={4}>
            <Link to={`/property/location/${1}`}>
              <Image
                src={City1}
                alt="city1"
                // style={{ width: '319px', height: '264px' }}
                fluid
              />
            </Link>
          </Col>
          <Col xs={4}>
            <Link to={`/property/location/${2}`}>
              <Image
                src={City2}
                alt="city2"
                // style={{ width: '319px', height: '264px' }}
                fluid
              />
            </Link>
          </Col>
          <Col xs={4}>
            <Link to={`/property/location/${3}`}>
              <Image
                src={City3}
                alt="city3"
                // style={{ width: '319px', height: '264px' }}
                fluid
              />
            </Link>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={6} md={6}>
            <Link to={`/property/location/${4}`}>
              <Image
                src={City4}
                alt="city1"
                // style={{ width: '512px', height: '300px' }}
                fluid
              />
            </Link>
          </Col>
          <Col xs={6} md={6}>
            <Link to={`/property/location/${5}`}>
              <Image
                src={City5}
                alt="city3"
                // style={{ width: '512px', height: '300px' }}
                fluid
              />
            </Link>
          </Col>
        </Row>
        <Row className="pt-3">
          <Col xs={6}>
            <Link to={`/property/location/${3}`}>
              <Image
                src={City6}
                alt="city1"
                // style={{ width: '512px', height: '300px' }}
                fluid
              />
            </Link>
          </Col>
          <Col xs={6}>
            <Link to={`/property/location/${2}`}>
              <Image
                src={City7}
                alt="city2"
                // style={{ width: '512px', height: '300px' }}
                fluid
              />
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
          <Carousel.Item
            style={{
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundPosition: '50% 50%',
            }}
          >
            <img
              className="d-block w-100"
              src={Kota}
              alt="First slide"
              // style={{ width: '10rem', height: '20rem' }}
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
              // style={{ width: '10rem', height: '20rem' }}
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
              }}
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
              // style={{ width: '10rem', height: '20rem' }}
              style={{
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
              }}
            />

            <Carousel.Caption>
              <h3>Dubai</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <Image
              className="d-block w-100"
              src={Kolkata}
              alt="Third slide"
              // style={{ width: '10rem', height: '20rem' }}
              style={{
                height: '50vh',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat',
                backgroundPosition: '50% 50%',
              }}
              fluid
            />

            <Carousel.Caption>
              <h3>Kolkata</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <Row className="pt-4">
          <Sponsors />
        </Row>
      </Container>
      <Bott />
    </>
  )
}

export default HomeScreen
