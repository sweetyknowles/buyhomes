import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'
import SignUp from './SignUp'

class LoginView extends Component {
  state = {
    buyers: [ { _id: '1234', name: 'jim' } ],
    redirectToBuyer: ''
  }

  getAllBuyers = () => {
    axios.get('/api/buyer').then((res) => {
      console.log(res.data)
      this.setState({ buyers: res.data })
    })
  }

  createNewBuyer = (payload) => {

    // payload object looks like {name: "some name"}
    axios.post('/api/buyer', payload).then((res) => {
      const newBuyerId = res.data[ res.data.length - 1 ]._id
      this.setState({ redirectToBuyer: newBuyerId })
    })
  }

  componentDidMount () {
    this.getAllBuyers()
  }

  render () {
    if (this.state.redirectToBuyer !== '') {
      return <Redirect to={`/buyer/${this.state.redirectToBuyer}`} />
    }
    return (
      <div>
        <h1>Welcome Back, Please select a buyer below</h1>
        <ul>
          {this.state.buyers.map((buyer) => {
            return (
              <li key={buyer._id}>
                <Link to={`/buyer/${buyer._id}`}>
                  {buyer.name}'s Home Stage
                </Link>
              </li>
            )
          })}
        </ul>
        <SignUp createNewBuyer={this.createNewBuyer} />
      </div>
    )
  }
}
export default LoginView
// When this page is open
// Fetch all users from the database
// Users can click on a user name
// and be taken to the ideapage for that user
