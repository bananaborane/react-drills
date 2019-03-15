import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios'

class App extends Component {
  constructor(){
    console.log('constructor invoked')
    super();
    this.state= {
      people: []
    }
  }

  componentDidMount(){
    console.log('componentDidMount invoked')

    let promise = axios.get('https://swapi.co/api/people/')
    // axios.get('url here') returns a promise
    // the process above occurs ASYNCRONOUSLY
    promise.then(response => this.setState({ people: response.data.results }))
    promise.catch(error => console.log('there was an error:', error))
    // .then returns a promise so we could also method chaining (for ex: promise.then().catch())
    // .catch DOES NOT return a promise
    // the page then rerenders because we set the state to the data we got from the API
  }

  render() {
    console.log('render invoked')
    return (
      <div className="App">
        {this.state.people.map((person)=>{return (<div style={{ width:'50vw' }} key={person.name}>
          <p style={{ border: '1px solid black', margin: 10 }}>{person.name}</p>
        </div>)})}
      </div>
    )
  }
}

export default App;