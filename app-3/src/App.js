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
  
  // searchForFunction = (userInput)=>{
    //   let newArr = this.state.favFoods.filter((item)=>{
      //     return item.includes(userInput);
      //   })
  //   this.setState({
    //     favFoods: newArr
  //   })
  // }

  render() {
    let newArr = this.state.favFoods.filter((item)=>{
      return item.includes(this.state.userInput);
    }).map((item)=>{return (
      <h3>
        {item}
      </h3>
    )})
    return (
      <div className="App">
        <h3>{newArr}</h3>
        <input type="text" onChange={(e)=>{this.handleOnChange(e)}}/>
      </div>
    );
  }
}

export default App;
