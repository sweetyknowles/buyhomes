import React, { Component } from 'react'
import styled from 'styled-components'

const HomeStyles = styled.div`
  background-color: #FFFBDA;
  width: 225px;
  height: 225px;
  position: relative;
  input, textarea {
    background: transparent;
    border: none;
    margin: 5px 0;
    font-size: 1.5rem;
  }
  textarea {
    font-size: 1rem;
    width: 100%;
    height: 60%;
  }
  p {
    position: absolute;
    right: 5px;
    color: red;
    &:hover {
      cursor: pointer;
    }
  }
`

class Home extends Component {

  handleChange = (event) => {
    this.props.handleHomeChange(event, this.props.home._id)
  }
  render () {
    return (
      <HomeStyles>
        <p onClick={() => this.props.deleteHome(this.props.home)}>X</p>
        <input type="text" name="title"
          value={this.props.home.title} onChange={this.handleChange}
          onBlur={() => this.props.updateHome(this.props.home)}
        />
        <textarea name="description" value={this.props.home.description}
          onChange={this.handleChange}
          onBlur={() => this.props.updateHome(this.props.home)}
        />
      </HomeStyles>
    )
  }
}

export default Home
