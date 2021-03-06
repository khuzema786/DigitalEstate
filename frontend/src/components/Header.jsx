import React from 'react'
import { Container, Navbar, Nav, Button, NavDropdown } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { LinkContainer } from 'react-router-bootstrap'
import { logout } from '../actions/userActions'
import { BsEnvelopeFill, BsBellFill } from 'react-icons/bs'
import { ReactComponent as Logo } from '../assets/logo.svg'

const Header = () => {
  const dispatch = useDispatch()

  const userLogin = useSelector((state) => state.userLogin)
  const { userInfo } = userLogin

  const logoutHandler = () => {
    dispatch(logout())
  }
  return (
    <Navbar bg="transparent" variant="light" expand="lg" collapseOnSelect>
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand>
            <Logo />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto align-items-center">
            <LinkContainer to="/option/Buy">
              <Nav.Link>Buy</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/option/Rent">
              <Nav.Link>Rent</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/option/Sell">
              <Nav.Link>Sell</Nav.Link>
            </LinkContainer>
            {userInfo && userInfo.isProvider && (
              <LinkContainer to="/provider/property">
                <Button className="mx-4" variant="outline-secondary">
                  Add New Property
                </Button>
              </LinkContainer>
            )}
            <LinkContainer to="/notification">
              <Nav.Link>
                <BsEnvelopeFill />
              </Nav.Link>
            </LinkContainer>
            {userInfo && userInfo.isProvider && (
              <LinkContainer to="/provider/notification">
                <Nav.Link href="#features">
                  <BsBellFill />
                </Nav.Link>
              </LinkContainer>
            )}
            {userInfo ? (
              <NavDropdown title={userInfo.name} id="username">
                {userInfo.isProvider && (
                  <>
                    <LinkContainer to="/provider/property/list">
                      <NavDropdown.Item>View Property</NavDropdown.Item>
                    </LinkContainer>
                  </>
                )}
                <LinkContainer to="/profile">
                  <NavDropdown.Item>Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to="/shortlist">
                  <NavDropdown.Item>Shortlist</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Item onClick={logoutHandler}>
                  Logout
                </NavDropdown.Item>
              </NavDropdown>
            ) : (
              <LinkContainer to="/login">
                <Nav.Link>
                  <i className="fas fa-user"></i> Sign In
                </Nav.Link>
              </LinkContainer>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
