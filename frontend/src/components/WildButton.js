import React from 'react'

class WildButton extends React.Component {
  constructor() {
    super()
    this.state = {
      touched: false
    }
  }

  render () {
    /* if (this.props.countable) {
      return (
        <button className="button" disabled={this.props.disabled} onClick={}>
          Gemme a challenge!
        </button>
      )
    } */

    return (
      <button
      className="button"
      disabled={this.props.disabled}
      onClick={() => {
        if (this.props.shouldChange) {
          this.setState({ touched: true })
        }
        this.props.clicked()
      }}>
        { !this.state.touched ? 'Gemme a challenge!' : 'Gemme another one' }
      </button>
    )
  }
}


export default WildButton