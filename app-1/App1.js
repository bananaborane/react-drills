import React, { Component } from "react";

export class App1 extends Component {
  constructor() {
    super();
    this.state = {
      text: ""
    };
  }

  handleChange = val => {
    this.setState({
      text: val
    });
  };

  render() {
    return (
      <div>
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <h2>{this.state.text}</h2>
      </div>
    );
  }
}

export default App1;
