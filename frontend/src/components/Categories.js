import React from 'react'

class Categories extends React.Component {
  render() {
    return (
      <select className="input-control" onChange={this.props.change}>
        <option value="null">-- choose a category --</option>
        <option value="classes">classes</option>
        <option value="databases">databases</option>
        <option value="files">files</option>
        <option value="games">games</option>
        <option value="graphics and multimedia">graphics and multimedia</option>
        <option value="text">text</option>
        <option value="threading">threading</option>
        <option value="web">web</option>￼
      </select>
    )
  }
}

export default Categories