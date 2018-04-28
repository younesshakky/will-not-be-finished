import React from 'react'

class WildButton extends React.Component {
  constructor() {
    super()
    this.state = {
      touched: false
    }
  }

  render () {
    if (this.props.boring) {
      return (
        <button className="button" disabled={this.props.disabled} onClick={this.props.clicked}>
          {this.props.text}
        </button>
      )
    }

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