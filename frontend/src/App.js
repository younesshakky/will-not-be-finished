import React, { Component } from 'react';
import config from './config'
import Categories from './components/categories';

import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      challenge: null,
      category: null
    }
  }


  handleChange (e) {
    this.setState({ category: e.target.value })
  }

  getChallenege () {
    const { category } = this.state;

    fetch(`${config.api_url}/challenges/${category}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        challenge: res.challenge
      })
    })
  }


  render() {
    return (
      <div className="app">
        <div className="container">
          <div className="heading">
            <h1>Random Programming Challenges</h1>
            <p>Chooes a category &amp; Hit the fucking button</p>
          </div>

          <div className="categories">
            <Categories change={this.handleChange.bind(this)}/>
          </div>
          <div className="button-wrapper">
            <button className="button" onClick={this.getChallenege.bind(this)}>
              Gemme a challenge!
            </button>
          </div>
          {
            this.state.challenge ?
            <div className="challenge-card">
            <h2>you'll Do</h2>
            <p>{ this.state.challenge }</p>
          </div> 
          : null
          }
               
        </div>

      </div>
    );
  }
}

export default App;
