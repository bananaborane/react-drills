import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter, Route, Switch, Link } from "react-router-dom";
import routes from './routes'

class App extends Component {
  render() {
    return (
        <div className="App">
          <nav>
            <ul>
              <Link to='/' >Home</Link>
              <Link to='/signup' >Signup</Link>
              <Link to='/details' >Details</Link>
            </ul>
          </nav>
          {routes}
        </div>

    );
  }
}

export default App;
