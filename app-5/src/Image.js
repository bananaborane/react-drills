import React, { Component } from 'react'

class Image extends Component {
  render() {
    return (
      <div>
        <h1>mark's favorite place</h1>
        <img src={this.props.pic} alt=""/>
      </div>
    )
  }
}

export default Image
