import React, { Component } from "react";
// import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(){
    super();
    this.state = {
      favfoods: ['spaghetti', 'ice cream', 'sushi', 'bologna', 'cheese']
    }
  }
  componentWillMount(){
    console.log('from componentWillMount')
  }

  componentDidMount(){
    console.log('from componentDidMount')
  }

  render() {
    let displayArray = this.state.favfoods.map((val, i)=>{
      return (<h2 key={i}>
        {val}
        </h2>)
    })
    return (
      <div className="App">
        <div>{displayArray}</div>
        {console.log('from render')}
      </div>
    );
  }
}

export default App;
