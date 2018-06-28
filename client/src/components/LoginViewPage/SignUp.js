import React, { Component } from 'react'

class SignUp extends Component {
  state = {
    name: ''
  }

  handleChange = (event) => {
    const newState = { ...this.state }
    newState[ event.target.name ] = event.target.value
    this.setState(newState)
  }

  saveNewBuyer = (event) => {
    event.preventDefault()
    this.props.createNewBuyer(this.state)
    this.setState({ name: '' })
  }

  render () {
    return (
      <div>
        <h1>Create A New Buyer</h1>
        <form onSubmit={this.saveNewBuyer}>
          <div>
            <label htmlFor="name">Buyer Name</label>
            <input type="text" name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </div>
          <button type="submit">Create New Buyer</button>
        </form>
      </div>

    )
  }
}

export default SignUp