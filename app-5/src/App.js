import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from './Image'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Image pic={'https://static.independent.co.uk/s3fs-public/thumbnails/image/2015/06/26/11/waikiki-alamy.jpg?w968h681'}/>
      </div>
    );
  }
}

export default App;
