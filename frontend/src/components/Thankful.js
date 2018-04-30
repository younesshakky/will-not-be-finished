import React from 'react'
import {Link} from 'react-router-dom'

class Thankful extends React.Component {

  render() {
    return (
      <div className="container">
        <div className="heading">
          <h1>Thanks, i knew you weren't a pure evil</h1>
          <Link className="button secondary" to="/">Go Home</Link>
        </div>
      </div>
    )
  }
}

export default Thankful