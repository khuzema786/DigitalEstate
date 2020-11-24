import React from 'react'
import { Nav } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'

const ProfileSteps = ({ step1, step2, step3 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>Sign In</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Sign In</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/profile">
            <Nav.Link>Profile</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Profile</Nav.Link>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/shortlist">
            <Nav.Link>Shortlist</Nav.Link>
          </LinkContainer>
        ) : (
          <Nav.Link disabled>Shortlist</Nav.Link>
        )}
      </Nav.Item>
    </Nav>
  )
}

export default ProfileSteps
