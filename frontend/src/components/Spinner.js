import React from 'react'

class Spinner extends React.Component {

  constructor() {
    super()
  }

  render () {
    return this.props.show && (
      <div className="spinner-wrapper">
        <div className="loading-spinner"></div>
      </div>
    )
  }
}

export default Spinner