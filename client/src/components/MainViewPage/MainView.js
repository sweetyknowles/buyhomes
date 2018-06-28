import React, { Component } from 'react'
import { Link } from 'react-router-dom'
class MainView extends Component {
  render () {
    return (
      <div>
        <h1>Welcome To The Home Buyers Stage</h1>
        <Link to="/login">Please Log In To Get Started</Link>
      </div>
    )
  }
}

export default MainView