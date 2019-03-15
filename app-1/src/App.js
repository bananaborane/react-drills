import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state={
      userInput: ''
    }
  }

  handleInputOnChange = (e)=>{
    this.setState({
      userInput: e.target.value
    })
  }
  // code above updates the user input and equates it to the value of the input
  

  render() {
    return (
      <div className="App">
        <input type="text" onChange={(e)=>{this.handleInputOnChange(e)}}/>
        {/* the input above has an attribute called onChange that will invoke an anonymous function that will invoke handleInputOnChange */}
        <h1>{this.state.userInput}</h1>
      </div>
    );
  }
}

export default App;
