import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";
import NewTask from './components/NewTask'
import List from './components/List'

let id=0;

class App extends Component {
  constructor(){
    super();
    this.state = {
      arr:[],
      input:''
    };
  }

  handleInputChange = (val) => {
    this.setState({
      input: val
    })
  }

  addTask = () => {
    this.setState({
      arr: [...this.state.arr, { text: this.state.input, id: id }],
      input: ""
    });
    id++;
  }

  removeTask = (num) => {
    let filteredArr = this.state.arr.filter((elem, i)=>{ return elem.id !== num })
    this.setState({
      arr: filteredArr
    })
  }

  render() {
    const { arr, input } = this.state;
    return (
      <div className="App">
        <h2>mytodoapp:</h2>
        <NewTask arr={arr} input={input} handleInputChange={this.handleInputChange} addTask={this.addTask}/>
        <List arr={arr} input={input} removeTask={this.removeTask} />
      </div>
    );
  }
}

export default App;
