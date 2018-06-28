import React, { Component } from 'react'
import axios from 'axios'
import Home from './Home'
import styled from 'styled-components'

const HomeFlexContainer = styled.div`
  display: flex;
  width: 95vw;
  justify-content: space-around;
  flex-wrap: wrap;
  align-content: space-around;
`

class HomeView extends Component {
  state = {
    buyer: '',
    homes: []
  };
  componentDidMount = () => {
    const buyerId = this.props.match.params.buyerId

    // We need to get info about the buyer with this ID
    // Use axios to make a get request
    axios
      .get(`/api/buyer/${buyerId}`)
      .then(res => {
        console.log(res.data)
        this.setState({
          buyer: res.data.name,
          homes: res.data.homes
        })
      })
      .catch(err => console.log(err))

    // Once resolved, setState for the buyer
    // Display info about buyer and homes
  };

  createNewHome = () => {
    const buyerId = this.props.match.params.buyerId
    axios.post(`/api/buyer/${buyerId}/home`).then((res) => {
      this.setState({ homes: res.data.homes })
    })
  }

  handleHomeChange = (event, id) => {
    console.log(id)
    const newHomes = [ ...this.state.homes ]
    console.log(newHomes)
    const homesToChange = newHomes.find(homes => homes._id === id)
    homesToChange[ event.target.name ] = event.target.value

    this.setState({ homes: newHomes })
  }

  updateHomes = (home) => {

    // home should look like {_id: '12314sdfa23d', name: 'newName', description: 'new desc'}
    const buyerId = this.props.match.params.buyerId
    axios.patch(`/api/buyer/${buyerId}/home/${home._id}`, home).then(res => {
      this.setState({ homes: res.data.homes })
    })
  }

  deleteHome = (home) => {
    const buyerId = this.props.match.params.buyerId
    axios.delete(`/api/buyer/${buyerId}/home/${home._id}`).then(res => {
      this.setState({ homes: res.data.homes })
    })
  }

  render () {
    return (
      <div>
        <h1>{this.state.buyer}'s Home Board</h1>
        <button onClick={this.createNewIdea}>New Home</button>
        <div>
          <label htmlFor="dateOrganizer">Sort Homes By:</label>
          <select name="dateOrganizer">
            <option value="newest">Newest Home</option>
            <option value="oldest">Oldest Home</option>
          </select>
        </div>
        <HomeFlexContainer>
          {this.state.homes.map(home => {
            return (
              <Home key={home._id}
                home={home}
                updateHome={this.updateHome}
                deleteHome={this.deleteHome}
                handleHomeChange={this.handleHomeChange}
              />)
          })}
        </HomeFlexContainer>
      </div>
    )
  }
}
export default HomeView