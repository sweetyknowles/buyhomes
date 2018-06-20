import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import'./App.css'
import MainView from './components/MainViewPage/MainView'
import HomeView from './components/HomeViewPage/HomeView'
import LoginView from './components/LoginViewPage/LoginView'


class App extends Component {
  render () {
    return (
      <Router>
        <div>
          <div>
            <Link to='/login'>Login</Link>
          </div>
          <Switch>
            <Route exact path="/" component={MainView}/>
            <Route path="/login" component={LoginView}/>
            <Route path="/buyer/:buyerId" component={HomeView}/>
          </Switch>
        </div>
      </Router>
    )
  }
}

export default App