import React, { Component } from "react";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    }
  }


  handleUsernameChange = (e)=>{
    this.setState({
        username: e.target.value
    })
  }
  
  handlePasswordChange = (e)=>{
    this.setState({
        password: e.target.value
    })
  }

  loggingIn = (u, p)=>{
      alert(`Logged in with username: ${u} and password: ${p}`)
    //   return (<button onClick={()=>{alert('logged out')}}>log out</button>)
  }

  render() {
    return (
        <div>
            <input type="text" onChange={e=>this.handleUsernameChange(e)} placeholder="username"/>
            <input type="text" onChange={e=>this.handlePasswordChange(e)} placeholder="password"/>
            <button onClick={()=>this.loggingIn(this.state.username, this.state.password)}>login</button>
        </div>
    )
  }
}

export default Login;
