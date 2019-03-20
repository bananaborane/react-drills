import React, { Component } from 'react'

class NewTask extends Component {
  render() {
    return (
      <div>
        <input type="text" placeholder="enter new task here" value={this.props.input} onChange={e=>this.props.handleInputChange(e.target.value)}/>
        <button onClick={this.props.addTask}>add new task</button>
      </div>
    )
  }
}

export default NewTask
