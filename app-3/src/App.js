import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      favFoods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese'],
      userInput: ''
    }
  }

  handleOnChange = (e)=>{
    this.setState({
      userInput: e.target.value
    })
  }
  

  render() {
    let newArr = this.state.favFoods.filter((item)=>{
      return item.includes(this.state.userInput)
    }).map((item, i)=>{return (
      <h3 key={i}>
        {item}
      </h3>
      //// METHOD CHAINING ABOVE, array.filter(filters with user's input).map(maps out to the render with JSX)
    )})
    return (
      <div className="App">
        <input type="text" onChange={(e)=>{this.handleOnChange(e)}}/>
        <h3>{newArr}</h3>
      </div>
    );
  }
}

export default App;
