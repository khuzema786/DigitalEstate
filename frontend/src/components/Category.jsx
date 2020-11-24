import React from 'react'
import { NavDropdown } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'
const Category = () => {
  return (
    <NavDropdown title="Sort By" id="location">
      <LinkContainer to="/property">
        <NavDropdown.Item>All</NavDropdown.Item>
      </LinkContainer>
      <LinkContainer to="/location/Pune">
        <NavDropdown.Item>Pune</NavDropdown.Item>
      </LinkContainer>

      <LinkContainer to="/location/Kota">
        <NavDropdown.Item>Kota</NavDropdown.Item>
      </LinkContainer>

      <LinkContainer to="/location/Kolkata">
        <NavDropdown.Item>Kolkata</NavDropdown.Item>
      </LinkContainer>

      <LinkContainer to="/location/Mumbai">
        <NavDropdown.Item>Mumbai</NavDropdown.Item>
      </LinkContainer>

      <LinkContainer to="/location/Jaipur">
        <NavDropdown.Item>Jaipur</NavDropdown.Item>
      </LinkContainer>
    </NavDropdown>
  )
}

export default Category
