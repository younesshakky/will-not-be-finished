import React, { Component } from 'react';
import config from '../config'
import { Categories, ChallengeCard, WildButton } from '../components';


class Home extends Component {
  constructor () {
    super()
    this.state = {
      challenge: null,
      category: null,
      loading: false,
      error: null
    }
  }


  handleChange (e) {
    this.setState({ category: e.target.value })
  }

  getChallenge () {
    const { category } = this.state;
    this.setState({ loading: true, challenge: null })
    fetch(`${config.api_url}/challenges/${category}`)
    .then(res => res.json())
    .then(res => {
      this.setState({
        challenge: res.challenge,
        loading: false,
        error: null
      })
    })
    .catch(err => {
      this.setState({ loading: false, error: err })
    })
  }


  render() {

    return (
      <div className="container">
        <div className="heading">
          <h1>Random Programming Challenges</h1>
          <p>Chooes a category &amp; Hit the fucking button</p>
        </div>

        <div className="categories">
          <Categories change={this.handleChange.bind(this)} />
        </div>
        
        <div className="button-wrapper">
          <WildButton shouldChange={!!this.state.challenge} disabled={!this.state.category} clicked={this.getChallenge.bind(this)} />
        </div>

        {
          !this.state.loading && this.state.challenge
          ? <ChallengeCard challenge={this.state.challenge} />
          : null
        }

        {
          this.state.loading
          ? <div className="loading-spinner"></div>
          : null
        }

        {
          this.state.error
          ? <p>{this.state.error.message}</p>
          : null 
        }
              
      </div>
    );
  }
}


export default Home