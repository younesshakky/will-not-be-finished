import React, { Component } from 'react';
import config from './config';
import { Home, SubmitChallenge, Thankful } from './components';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super()
    this.state = {
      homeView: true,
      submissionView: false,
      thankfulView: false
    }
  }

  // showSubmission(e) {
  //   e.preventDefault()
  //   this.setState({ 
  //     homeView: false,
  //     submissionView: true
  //   })
  // }

  // showThankful() {
  //   this.setState({ 
  //     submissionView: false,
  //     thankfulView: true
  //   })
  // }

  // closeThankful(e) {
  //   e.preventDefault()
  //   this.setState({ 
  //     homeView: true,
  //     thankfulView: false
  //   })   

  // }
  
  render() {
    return (
      <Router>
        <div className="app">
          <Route exact path="/" component={Home}/>
          <Route path="/submit" component={SubmitChallenge}/>
          <Route path="/thanks" component={Thankful}/>
          
          
        </div>
      </Router>
    )
  }
}

export default App;
