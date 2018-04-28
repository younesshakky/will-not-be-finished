import React from 'react'

class Thankful extends React.Component {

  render() {
    return this.props.show && (
      <div className="container">
        <div className="heading">
          <h1>Thanks, i new you weren't a pure evil</h1>
          <button className="button secondary" onClick={this.props.close}>close</button>
        </div>
      </div>
    )
  }
}

export default Thankful