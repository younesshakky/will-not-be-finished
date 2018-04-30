import React from 'react'

class Categories extends React.Component {
  constructor() {
    super()
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    var category = e.target.value == 'null' ? null : e.target.value
    this.props.change(category)
  }
  render() {
    return (
      <select className="input-control" onChange={this.handleChange}>
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