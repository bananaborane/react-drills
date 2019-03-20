import React, { Component } from "react";

export class App1 extends Component {
    constructor(){
        super();
        state = {
            arr = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
        }
    }

    handleChange = (val)=>{
        let displayedArr = arr.filter((elem)=>{ return elem.includes(val) })
        this.setState({ arr: displayedArr })
    }

  render() {
    // let arr = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"];
    return (
      <div>
        <input type="text" onChange={e => this.handleChange(e.target.value)} />
        <h2>{displayedArr}</h2>
      </div>
    );
  }
}

export default App1;
