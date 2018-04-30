import React from 'react'
import { Categories, WildButton } from '../components' 
import config from '../config'
import { Link, Redirect } from 'react-router-dom'

class SubmitChallenge extends React.Component {
  constructor() {
    super()
    this.state = {
      category: null,
      name: null,
      text: null,
      redirect: false
    }
    this.initialState = this.state
  }

  static initialState

  submitForm(e) {
    e.preventDefault()
    console.log('state', this.state)
    fetch(`${config.api_url}/challenges/submit`, {
      body: JSON.stringify(this.state),
      headers: new Headers({'Content-Type': 'application/json'}),
      method: 'POST',
    })
    .then(res => res.json())
    .then(res => {
      this.setState({ ...this.initialState, redirect: true })

      // this.props.sayThanks()
    })
  }

  categoryChange(category) {
    this.setState({ category })
  }

  inputChanges (e) {
    var optState = {}
    optState[e.target.name] = e.target.value;
    this.setState({ ...optState })
  }

  render() {
    let { name, category, text, redirect } = this.state;

    if (redirect) {
      return <Redirect to="/thanks" />
    }
    return (
      <div className="submission-wrapper animated fadeIn">
        <div className="container">
          <div className="heading">
            <h1>Submit a programming challenge</h1>
            <p>Help me a bit madafakarz</p>
          </div>

          <div className="form-wrapper">
            <form action="" onSubmit={this.submitForm.bind(this)}>
              <label htmlFor=""></label>
              <div className="form-group">
                <input
                onInput={this.inputChanges.bind(this)}
                name="name"
                className="input-control"
                placeholder="Give it a name"
                type="text"/>
              </div>

              <div className="form-group">
                {/* <input className="input-control" type="text"/> */}
                <Categories change={this.categoryChange.bind(this)}></Categories>
              </div>

              <div className="form-group">
                <textarea
                onInput={this.inputChanges.bind(this)}
                className="input-control"
                name="text"
                rows="8"
                placeholder="the battlefield is yours now"></textarea>
              </div>

              <div className="form-group">
                <WildButton disabled={!name || !category || !text } boring={true} text="submit"></WildButton>
                <Link to="/" className="prim-link ml-1">back</Link>
              </div>
            </form>
          </div>
        </div>
      
      </div>
    )
  }
}

export default SubmitChallenge
