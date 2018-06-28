import React, { Component } from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const NavBarStyles = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background: palegoldenrod;
`

class NavBar extends Component {
  render () {
    return (
      <NavBarStyles>
        <h1>Home Buyer's Stage</h1>
        <ul>
          <li>
            <Link to="/">Home Page</Link>
          </li>
          <li>
            <Link to="/login">LogIn</Link>
          </li>
          <li>
            <Link to="/buyer/testBuyerId">Home Page</Link>
          </li>
        </ul>
      </NavBarStyles>
    )
  }
}

export default NavBar
