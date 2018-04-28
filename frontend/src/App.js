import React, { Component } from 'react';
import config from './config'
import { Home, SubmitChallenge, Thankful } from './components';

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

  showSubmission(e) {
    e.preventDefault()
    this.setState({ 
      homeView: false,
      submissionView: true
    })
  }

  showThankful() {
    this.setState({ 
      submissionView: false,
      thankfulView: true
    })
  }

  closeThankful(e) {
    e.preventDefault()
    this.setState({ 
      homeView: true,
      thankfulView: false
    })   

  }
  
  render() {
    return (
      <div className="app">
        <Home
        submitChallenge={this.showSubmission.bind(this)}
        show={this.state.homeView}></Home>

        <SubmitChallenge
        sayThanks={this.showThankful.bind(this)}
        show={this.state.submissionView} />

        <Thankful
        show={this.state.thankfulView}
        close={this.closeThankful.bind(this)}></Thankful>
      </div>
    )
  }
}

export default App;
