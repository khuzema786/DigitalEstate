import React from 'react'
import { NavDropdown } from 'react-bootstrap'

const Category = ({ setSelector }) => {
  const clickHandler = (s) => {
    setSelector(s)
    console.log(s)
  }

  return (
    <NavDropdown title="Sort By" id="location">
      <NavDropdown.Item onClick={() => clickHandler(0)}>All</NavDropdown.Item>
      <NavDropdown.Item onClick={() => clickHandler(1)}>Pune</NavDropdown.Item>

      <NavDropdown.Item onClick={() => clickHandler(2)}>Kota</NavDropdown.Item>

      <NavDropdown.Item onClick={() => clickHandler(3)}>
        Kolkata
      </NavDropdown.Item>

      <NavDropdown.Item onClick={() => clickHandler(4)}>
        Mumbai
      </NavDropdown.Item>

      <NavDropdown.Item onClick={() => clickHandler(5)}>
        Jaipur
      </NavDropdown.Item>
    </NavDropdown>
  )
}

export default Category
