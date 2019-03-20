import React, { Component } from "react";

export class App1 extends Component {
  render() {
    let arr = ["spaghetti", "ice cream", "sushi", "bologna", "cheese"];
    let displayedArr = arr.length ? (
      arr.map((elem, i) => {
        return (
          <div key={i}>
            <h3>{elem}</h3>
          </div>
        );
      })
    ) : (
      <div>sorry, no items to display!</div>
    );
    return <div>{displayedArr}</div>;
  }
}

export default App1;
