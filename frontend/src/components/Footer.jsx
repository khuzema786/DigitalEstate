import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import { ReactComponent as Logo } from '../assets/logo.svg'
import { LinkContainer } from 'react-router-bootstrap'
import Handles from '../assets/handles.jpg'
const Footer = () => {
  return (
    <>
      <Container fluid className="text-center text-md-left pt-5">
        <hr />
        <Row className="justify-content-center py-4">
          <Col md="2">
            <Logo />
            <p className="pt-3">
              Here you can use rows and columns here to organize your footer
              content.
            </p>
            <img className="pb-3" src={Handles} alt="handles" />
          </Col>
          <Col md="2">
            <h5 className="title">Digital Estate</h5>
            <ul>
              <li className="list-unstyled">
                <span>About</span>
              </li>
              <li className="list-unstyled">
                <span>Contact Us</span>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h5 className="title">Buy</h5>
            <ul>
              <li className="list-unstyled">
                <LinkContainer
                  style={{ cursor: 'pointer' }}
                  to={`/option/Buy/Apartments`}
                >
                  <span>Apartments</span>
                </LinkContainer>
              </li>

              <li className="list-unstyled">
                <LinkContainer
                  style={{ cursor: 'pointer' }}
                  to={`/option/Buy/Houses`}
                >
                  <span>Houses</span>
                </LinkContainer>
              </li>

              <li className="list-unstyled">
                <LinkContainer
                  style={{ cursor: 'pointer' }}
                  to={`/option/Buy/Offices`}
                >
                  <span>Offices</span>
                </LinkContainer>
              </li>

              <li className="list-unstyled">
                <LinkContainer
                  style={{ cursor: 'pointer' }}
                  to={`/option/Buy/Land`}
                >
                  <span>Land</span>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h5 className="title">Rent</h5>
            <ul>
              <li className="list-unstyled">
                <LinkContainer
                  style={{ cursor: 'pointer' }}
                  to={`/option/Rent/Apartments`}
                >
                  <span>Apartments</span>
                </LinkContainer>
              </li>

              <li className="list-unstyled">
                <LinkContainer
                  style={{ cursor: 'pointer' }}
                  to={`/option/Rent/Houses`}
                >
                  <span>Houses</span>
                </LinkContainer>
              </li>

              <li className="list-unstyled">
                <LinkContainer
                  style={{ cursor: 'pointer' }}
                  to={`/option/Rent/Offices`}
                >
                  <span>Offices</span>
                </LinkContainer>
              </li>

              <li className="list-unstyled">
                <LinkContainer
                  style={{ cursor: 'pointer' }}
                  to={`/option/Rent/Land`}
                >
                  <span>Land</span>
                </LinkContainer>
              </li>
            </ul>
          </Col>
          <Col md="2">
            <h5 className="title">Customers</h5>
            <ul>
              <li className="list-unstyled">
                <span>For home sellers</span>
              </li>
              <li className="list-unstyled">
                <span>For real estate agents</span>
              </li>
            </ul>
          </Col>
        </Row>
        <Row className="justify-content-center pb-3">
          <strong>&copy;2020 Freeloader Inc.</strong>
        </Row>
      </Container>
    </>
  )
}

export default Footer
