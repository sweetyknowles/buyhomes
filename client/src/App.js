import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import styled from './styled-components'
import MainViewPage from './components/MainViewPage'
import HomeViewPage from './components/HomeViewPage'
import LoginViewPage from './components/LoginViewPage'



class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <Switch>
            <Route exact path="/" component={MainViewPage}/>
            <Route path="/login" component={LoginViewPage}/>
            <Route path="/buyer/:buyerId" component={HomeViewPage}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App