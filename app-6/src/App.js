import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todo";

class App extends Component {
  constructor() {
    super();

    this.state = {
      toDoArray: ['play some overwatch', 'buy some juice'],
      input: ""
    };

    // this.addAToDo = this.addAToDo.bind(this);
  }

  handleInputChange(value) {
    this.setState({ input: value });
  }

  addAToDo=() => {
    this.setState({
      toDoArray: [...this.state.toDoArray, this.state.input],
        // spreads the toDoArray to individual elements and pushes input at the end
      input: ""
    });
  }

  render() {
    let toDoArray = this.state.toDoArray.map((element, i) => {
      return <Todo key={i} task={element} />;
    });

    return (
      <div className="App">
        <h1>My to-do toDoArray:</h1>

        <div>
          <input
            value={this.state.input}
            placeholder="Enter new task"
            onChange={e => this.handleInputChange(e.target.value)}
          />

          <button onClick={this.addAToDo}>Add</button>
        </div>

        <br />

        {toDoArray}
      </div>
    );
  }
}

export default App;