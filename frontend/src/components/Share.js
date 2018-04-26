import React from 'react'


class Share extends React.Component {
  
  constructor() {
    super()
    this.openShareWindow = this.openShareWindow.bind(this)
  }
  
  openShareWindow(e) {
    e.preventDefault()
    window.open(
      `https://twitter.com/intent/tweet?text=${this.props.text}`,
      '',
      'width=600,height=300'
    )
  }

  render () {
    return (
      <a
      className="share-icon"
      onClick={this.openShareWindow}
      href="#share"
      title="share it with your friends">
        <i className="fab fa-twitter"></i>
      </a>
    );
  }
}

export default Share