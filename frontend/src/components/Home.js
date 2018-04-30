import React from 'react';
import config from '../config'
import { Categories, ChallengeCard, WildButton, Spinner } from '../components';
import { Link } from 'react-router-dom'

class Home extends React.Component {
  constructor () {
    super()
    this.state = {
      challenge: null,
      category: null,
      loading: false,
      error: null
    }
  }

  handleChange (category) {
    this.setState({ category })
  }

  getChallenge () {
    const { category } = this.state;
    this.setState({ loading: true, challenge: null })
    fetch(`${config.api_url}/challenges/${category}`)
    .then(res => res.json())
    .then(challenge => {

      this.setState({
        challenge,
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
      <div className="home animated fadeIn">
        <div className="container">
          <div className="heading">
            <h1>Random Programming Challenges</h1>
            <p>Chooes a category &amp; Hit the fucking button</p>
          </div>

          <div className="categories">
            <Categories change={this.handleChange.bind(this)} />
          </div>
          
          <div className="button-wrapper">
            <WildButton
            shouldChange={!!this.state.challenge}
            disabled={!this.state.category}
            clicked={this.getChallenge.bind(this)} />
          </div>

          <ChallengeCard
          show={!this.state.loading && this.state.challenge}
          challenge={this.state.challenge} />


          <Spinner show={this.state.loading} />

          {
            this.state.error
            ? <p>{this.state.error.message}</p>
            : null 
          }

          <div className="text-center submission -wrap" style={{ marginTop: '30px' }}>
          <Link className="prim-link" to="/submit">Submit a challenge?</Link>
            {/* <a className="prim-link" href="#submit" onClick={this.props.submitChallenge}>Submit a challenge?</a>*/}
          </div>
                
        </div>
      </div>
    );
  }
}


export default Home